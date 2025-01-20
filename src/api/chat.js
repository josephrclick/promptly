// src/api/chat.js
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;
const requestCounts = new Map();

// Rate limiting middleware
const checkRateLimit = (ip) => {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  // Clean up old entries
  for (const [key, data] of requestCounts.entries()) {
    if (data.timestamp < windowStart) {
      requestCounts.delete(key);
    }
  }
  
  // Check current request count
  const currentData = requestCounts.get(ip) || { count: 0, timestamp: now };
  if (currentData.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  
  // Update request count
  requestCounts.set(ip, {
    count: currentData.count + 1,
    timestamp: now
  });
  
  return true;
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ 
        error: 'Too many requests. Please try again later.' 
      });
    }

    const { messages } = req.body;

    // Validate request body
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request. Messages array is required.' 
      });
    }

    // Create chat completion
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        // System message to set context
        {
          role: 'system',
          content: 'You are a helpful assistant in a chat interface. Provide clear, concise, and friendly responses.'
        },
        ...messages
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Set up SSE headers for streaming
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    // Stream the response
    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    // End the stream
    res.end();

  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Handle different types of errors
    if (error.response) {
      return res.status(error.response.status).json({
        error: error.response.data.error.message
      });
    } else {
      return res.status(500).json({
        error: 'An error occurred while processing your request.'
      });
    }
  }
}
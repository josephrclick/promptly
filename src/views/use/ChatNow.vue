<!-- src/views/ChatNow.vue -->
<template>
  <div class="h-screen flex flex-col bg-gray-50">    
    <!-- Main Chat Container -->
    <div class="flex-grow flex flex-col overflow-hidden">
      <!-- Messages Container -->
      <div 
        ref="messagesContainer"
        class="flex-grow overflow-y-auto"
      >
        <div class="max-w-3xl mx-auto px-4">
          <!-- Welcome Message -->
          <div v-if="messages.length === 0" class="pt-8">
            <p class="text-base text-gray-600 text-center">
            <b>How to Start?</b>
            </p><br>
            <p class="text-base text-gray-600 text-center">
            Ask to learn more about something that interests you. Ask for a summary of a book in a few bullet points, or a sentence, or one word.
            </p><br>
            <p class="text-base text-gray-600 text-center">
            You can tap an example prompt below and see what happens. Ask a follow up question or for more detail. 
            </p><br>
            <div class="grid gap-4 mt-1">
              <div
                v-for="(prompt, index) in suggestedPrompts"
                :key="index"
                class="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer transition-all shadow-md hover:shadow-xl"
                @click="handlePromptSelection(prompt)"
              >        
                <p class="text-gray-600">{{ prompt }}</p>
              </div>
            </div>
          </div>

          <!-- Chat Messages -->
          <div class="pb-40 pt-4">
            <div v-for="(message, index) in messages" :key="index">
              <!-- Message Container -->
              <div 
                class="px-4 py-6 text-gray-800"
                :class="message.role === 'assistant' ? 'bg-white' : 'bg-gray-50'"
              >
                <div class="max-w-3xl mx-auto flex gap-4">
                  <!-- Role Icon -->
                  <div class="flex-shrink-0 w-8 h-8">
                    <div 
                      v-if="message.role === 'assistant'"
                      class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
                    >
                      <Bot class="w-5 h-5 text-white" />
                    </div>
                    <div 
                      v-else
                      class="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center"
                    >
                      <User class="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <!-- Message Content -->
                  <div class="min-w-0 flex-1">
                    <div v-if="message.isPlaceholderPrompt" class="space-y-4">
                      {{ message.content }}
                      <div class="mt-4">
                        <input
                          v-model="placeholderValue"
                          type="text"
                          class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          :placeholder="message.placeholder"
                          @keyup.enter="submitPlaceholderValue"
                        />
                      </div>
                    </div>
                    <div v-else>
                      <!-- Message Content Section -->
                      <div class="markdown-body">
                        <template v-if="hasMarkdownTable(message.content)">
                          <template v-for="(block, index) in parseMessageContent(message.content)" :key="index">
                            <TableResponse 
                              v-if="block.type === 'table'"
                              :headers="block.data.headers"
                              :rows="block.data.rows"
                            />
                            <div 
                              v-else 
                              v-html="marked(block.content)"
                            ></div>
                          </template>
                        </template>
                        <div 
                          v-else 
                          v-html="marked(message.content)"
                        ></div>
                      </div>

                     
                      <span 
                        v-if="message.isStreaming" 
                        class="inline-block ml-1 animate-pulse"
                      >▍</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Loading Indicator -->
            <div 
              v-if="isLoading" 
              class="py-4 flex justify-center"
            >
              <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div class="bg-gradient-to-t from-white via-white to-transparent absolute bottom-full left-0 right-0 h-16 pointer-events-none"></div>
        <div class="max-w-3xl mx-auto px-4 pt-3">
          <div class="relative flex items-center">
            <div class="relative flex-grow">
              <textarea
                v-model="currentMessage"
                rows="1"
                class="w-full pr-12 pl-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Send a message..."
                @keydown.enter.prevent="sendMessage"
                @input="autoGrow"
                ref="messageInput"
              ></textarea>
              <button
                class="absolute right-2 bottom-2.5 text-gray-500 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:hover:text-gray-500"
                :disabled="!currentMessage.trim() || isLoading"
                @click="sendMessage"
              >
                <Send class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex justify-between items-center mt-3 mb-2">
            <button
              @click="leaveChat"
              class="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors font-medium"
            >
              Leave Chat
            </button>
            <button
              @click="sendMessage"
              :disabled="!currentMessage.trim() || isLoading"
              class="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium disabled:opacity-50 disabled:hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>

          <div class="text-center py-2 border-t border-gray-100">
            <p class="text-xs text-gray-500">
              Powered by <a href="https://openai.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">OpenAI</a>. Try the full ChatGPT experience at <a href="https://chat.openai.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">chat.openai.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { Send, Bot, User } from 'lucide-vue-next'
import { useMessageStore } from '@/stores/messageStore'
import { marked } from 'marked'
import TableResponse from '@/components/TableResponse.vue'
import { parseMarkdownTable, hasMarkdownTable } from '@/utils/tableParser'

// Get API config from either environment variables or config file
// Replace with this
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY
const API_URL = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions'

// Store
const messageStore = useMessageStore()
const router = useRouter()

// State
const currentMessage = ref('')
const messages = ref([])
const isLoading = ref(false)
const messagesContainer = ref(null)
const messageInput = ref(null)
const placeholderValue = ref('')
const currentPlaceholder = ref(null)

// Suggested prompts
const suggestedPrompts = [
  "What exactly are you and what can you do to make my life better?",
  "I have some chicken breast, salami, tomatoes, greens, cheese, rice, and some other pantry staples I need to use. Find me recipes in different styles and cuisines I can try. Make sure the recipes are easy but they seem hard and fancy.",
  "My kid said they want a dog, a lizard, or a marmot. You've got to help me with basic info and costs and stuff.",
  "Summarize in a table every movie starring Michael J. Fox in one word and whether critics liked it or not."
]

// Auto-grow textarea
const autoGrow = () => {
  if (!messageInput.value) return
  messageInput.value.style.height = 'auto'
  messageInput.value.style.height = messageInput.value.scrollHeight + 'px'
}

// Function to extract placeholders from text
const extractPlaceholders = (text) => {
  const placeholderRegex = /\[(.*?)\]/g
  const matches = [...text.matchAll(placeholderRegex)]
  return matches.map(match => ({
    placeholder: match[1],
    fullMatch: match[0]
  }))
}

// Function to handle placeholder prompts
const handlePlaceholderPrompt = async (text) => {
  const placeholders = extractPlaceholders(text)
  if (placeholders.length === 0) {
    return text
  }

  currentPlaceholder.value = placeholders[0]
  
  messages.value.push({
  role: "system",
  content: `You are an enthusiastic and encouraging AI assistant helping someone who may be trying AI chat for the first time. Your goal is to impress them with AI's capabilities while keeping responses clear and helpful. Show genuine interest in their questions and provide thoughtful, practical answers that demonstrate your capabilities. When appropriate, end your responses by asking about their specific situation or encouraging them to explore the topic further. For example, if they ask about a recipe, share the recipe and then ask what ingredients they have or their cooking preferences. If they ask about a topic, share key insights and then ask what aspect interests them most. Keep questions focused and natural - don't interrogate. Your tone should be warm and conversational while remaining informative and casually professional. These users are our friends and family, so you can be a bit quirky and fun without overdoing it. You will occassionally remind users they can guide your responses to a great degree, as they may not know this. As one of your top goals is to encourage users to use ChatGPT more, you will always indicate, within reason, functionality that exists in different OpenAI models or modes, except having to leverage APIs, whether free or on a paid plan, so the user is aware of all available capabilities. Make your responses visually engaging by using:
  - **Bold text** for important points
  - Bullet points for lists
  - Line breaks for readability
  - \`code blocks\` when sharing specific terms or examples
  - Tables when comparing options
  
  Your goal is to impress them with AI's capabilities while keeping responses clear and helpful. Show genuine interest in their questions and provide thoughtful, practical answers that demonstrate your capabilities. When appropriate, end your responses by asking about their specific situation or encouraging them to explore the topic further.`
})
  
  await scrollToBottom()
  return null
}

// Function to submit placeholder value
const submitPlaceholderValue = async () => {
  if (!placeholderValue.value || !currentPlaceholder.value) return
  
  const originalMessage = messages.value.find(m => m.role === 'user').content
  const newMessage = originalMessage.replace(
    currentPlaceholder.value.fullMatch, 
    placeholderValue.value
  )
  
  messages.value.find(m => m.role === 'user').content = newMessage
  messages.value = messages.value.filter(m => !m.isPlaceholderPrompt)
  
  placeholderValue.value = ''
  currentPlaceholder.value = null
  
  await processMessage(newMessage)
}

// Handle selecting a suggested prompt
const handlePromptSelection = async (prompt) => {
  messages.value.push({
    role: 'user',
    content: prompt
  })
  
  await scrollToBottom()
  
  const result = await handlePlaceholderPrompt(prompt)
  if (result) {
    await processMessage(result)
  }
}

// Process and send message to ChatGPT
const processMessage = async (message) => {
  try {
    const { stream, decoder } = await callChatGPT([
      {
        role: "system",
 content: `You are an enthusiastic and encouraging AI assistant helping someone who may be trying AI chat for the first time. Your goal is to impress them with AI's capabilities while keeping responses clear and helpful. Show genuine interest in their questions and provide thoughtful, practical answers that demonstrate your capabilities. When appropriate, end your responses by asking about their specific situation or encouraging them to explore the topic further. For example, if they ask about a recipe, share the recipe and then ask what ingredients they have or their cooking preferences. If they ask about a topic, share key insights and then ask what aspect interests them most. Keep questions focused and natural - don't interrogate. Your tone should be warm and conversational while remaining informative and casually professional. These users are our friends and family, so you can be a bit quirky and fun without overdoing it. You will occassionally remind users they can guide your responses to a great degree, as they may not know this. As one of your top goals is to encourage users to use ChatGPT more, you will always indicate, within reason, functionality that exists in different OpenAI models or modes, except having to leverage APIs, whether free or on a paid plan, so the user is aware of all available capabilities. Make your responses visually engaging by using:
  - **Bold text** for important points
  - Bullet points for lists
  - Line breaks for readability
  - \`code blocks\` when sharing specific terms or examples
  - Tables when comparing options
  
  Your goal is to impress them with AI's capabilities while keeping responses clear and helpful. Show genuine interest in their questions and provide thoughtful, practical answers that demonstrate your capabilities. When appropriate, end your responses by asking about their specific situation or encouraging them to explore the topic further.`
        
      },
      ...messages.value.filter(m => !m.isPlaceholderPrompt)
    ])

    messages.value.push({
      role: 'assistant',
      content: '',
      isStreaming: true
    })

    let accumulatedResponse = ''
    
    let streaming = true
    while (streaming) {
    const { done, value } = await stream.read()
    if (done) {
        streaming = false
        continue
    }

      const chunk = decoder.decode(value)
      const lines = chunk.split('\n')
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6)
          if (data === '[DONE]') continue
          
          try {
            const parsed = JSON.parse(data)
            const content = parsed.choices[0]?.delta?.content || ''
            accumulatedResponse += content
            
            messages.value[messages.value.length - 1] = {
              role: 'assistant',
              content: accumulatedResponse,
              isStreaming: true
            }
            
            await scrollToBottom()
          } catch (e) {
            console.error('Error parsing chunk:', e)
          }
        }
      }
    }

    messages.value[messages.value.length - 1] = {
      role: 'assistant',
      content: accumulatedResponse,
      isStreaming: false
    }

  } catch (error) {
    console.error('Error:', error)
    messages.value.push({
      role: 'assistant',
      content: 'I apologize, but I encountered an error. Please try again.',
      isStreaming: false
    })
  }
}

// Send message handler
const sendMessage = async () => {
  const message = currentMessage.value.trim()
  if (!message || isLoading.value) return
  
  if (!messageStore.canSendMessage()) {
    messages.value.push({
      role: 'assistant',
      content: 'Please wait a moment before sending another message.',
      isStreaming: false
    })
    await scrollToBottom()
    return
  }

  messages.value.push({
    role: 'user',
    content: message
  })
  messageStore.addMessage(message)
  
  currentMessage.value = ''
  messageInput.value.style.height = 'auto'
  await scrollToBottom()

  const result = await handlePlaceholderPrompt(message)
  if (result) {
    await processMessage(result)
  }
}

// Auto-scroll to bottom
const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// Call ChatGPT API
const callChatGPT = async (messages) => {
  if (!API_KEY) {
    throw new Error('OpenAI API key not configured')
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      temperature: 0.7,
      stream: true
    })
  })

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }

  return {
    stream: response.body.getReader(),
    decoder: new TextDecoder()
  }
}

// Navigation
const leaveChat = () => {
  router.push('/use')
}

// format markdown
const formatMessage = (content) => {
  if (hasMarkdownTable(content)) {
    const tables = parseMarkdownTable(content);
    
    // Replace each table with a placeholder
    let formattedContent = content;
    tables.forEach((table, index) => {
      const tableRegex = /\|(.+)\|\n\|(?:-{3,}[:|]-{3,})*\|\n((?:\|.+\|\n?)*)/;
      formattedContent = formattedContent.replace(tableRegex, `<div data-table-index="${index}"></div>`);
    });
    
    // Format the non-table content
    const htmlContent = marked(formattedContent);
    
    // Re-inject the tables as Vue components
    tables.forEach((table, index) => {
      const placeholder = `<div data-table-index="${index}"></div>`;
      const tableComponent = `<TableResponse :headers='${JSON.stringify(table.headers)}' :rows='${JSON.stringify(table.rows)}' />`;
      htmlContent = htmlContent.replace(placeholder, tableComponent);
    });
    
    return htmlContent;
  }
  
  // If no tables, just use regular markdown formatting
  return marked(content);
}

onMounted(() => {
  if (messageInput.value) {
    messageInput.value.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        sendMessage()
      }
    })
  }
})

const parseMessageContent = (content) => {
  const blocks = []
  const tables = parseMarkdownTable(content)
  
  // Split content by table matches
  const tableRegex = /\|(.+)\|\n\|(?:-{3,}[:|]-{3,})*\|\n((?:\|.+\|\n?)*)/g
  let lastIndex = 0
  let match
  
  while ((match = tableRegex.exec(content)) !== null) {
    // Add text before table
    if (match.index > lastIndex) {
      blocks.push({
        type: 'text',
        content: content.slice(lastIndex, match.index)
      })
    }
    
    // Add table
    blocks.push({
      type: 'table',
      data: tables[blocks.filter(b => b.type === 'table').length]
    })
    
    lastIndex = match.index + match[0].length
  }
  
  // Add remaining text after last table
  if (lastIndex < content.length) {
    blocks.push({
      type: 'text',
      content: content.slice(lastIndex)
    })
  }
  
  return blocks
}
</script>

<style>
.markdown-body {
  line-height: 1.6;
}

.markdown-body h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
}

.markdown-body h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.875rem 0;
}

.markdown-body h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.75rem 0;
}

.markdown-body ul, .markdown-body ol {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.markdown-body ul {
  list-style-type: disc;
}

.markdown-body ol {
  list-style-type: decimal;
}

.markdown-body code {
  background-color: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.markdown-body pre {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 0.75rem 0;
}

.markdown-body pre code {
  background-color: transparent;
  padding: 0;
}

.markdown-body p {
  margin: 0.75rem 0;
}

.markdown-body a {
  color: #2563eb;
  text-decoration: underline;
}

.markdown-body blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 1rem;
  margin: 0.75rem 0;
  color: #4b5563;
}
</style>
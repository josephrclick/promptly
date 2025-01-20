<!-- src/views/ChatNow.vue -->
<template>
  <div class="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
    <Breadcrumbs class="m-4 mb-1" />
    
    <!-- Header -->
    <header class="flex-none text-center py-6 px-4">
      <h1 class="text-3xl font-bold text-gray-900">Chat Now</h1>
      <p class="text-base text-gray-600 mt-2">Start a conversation with ChatGPT</p>
    </header>

    <!-- Main Chat Area -->
    <main class="flex-grow px-4 pb-4 overflow-hidden flex flex-col">
      <!-- Messages Container -->
      <div 
        ref="messagesContainer"
        class="flex-grow overflow-y-auto space-y-4 mb-4 px-2"
      >
        <!-- Welcome Message -->
        <div v-if="messages.length === 0" class="space-y-4">
          <div class="bg-white rounded-xl shadow-md p-5">
            <p class="text-gray-600 mb-4">Try one of these prompts to get started:</p>
            <div class="space-y-3">
              <div 
                v-for="(prompt, index) in suggestedPrompts" 
                :key="index"
                class="bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition-colors"
                @click="selectPrompt(prompt)"
              >
                {{ prompt }}
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Messages -->
        <template v-for="(message, index) in messages" :key="index">
          <!-- User Message -->
          <div 
            v-if="message.role === 'user'"
            class="flex justify-end"
          >
            <div class="bg-blue-600 text-white rounded-xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
              {{ message.content }}
            </div>
          </div>

          <!-- Assistant Message -->
          <div 
            v-else
            class="flex justify-start"
          >
            <div class="bg-white text-gray-800 rounded-xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
              {{ message.content }}
              <span 
                v-if="message.isStreaming" 
                class="inline-block ml-1"
              >
                <span class="typing-indicator">▋</span>
              </span>
            </div>
          </div>
        </template>

        <!-- Loading Indicator -->
        <div 
          v-if="isLoading" 
          class="flex justify-center py-4"
        >
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="flex-none px-2">
        <div class="bg-white rounded-xl shadow-md p-3 flex items-center space-x-3">
          <!-- Speech Input Button -->
          <button 
            class="flex-none text-gray-500 hover:text-blue-600 transition-colors"
            @click="toggleSpeechInput"
            :class="{ 'text-blue-600': isListening }"
          >
            <Mic :size="24" />
          </button>

          <!-- Text Input -->
          <input
            v-model="currentMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-grow bg-transparent focus:outline-none"
            @keyup.enter="sendMessage"
          />

          <!-- Send Button -->
          <button
            class="flex-none text-gray-500 hover:text-blue-600 transition-colors disabled:opacity-50"
            :disabled="!currentMessage.trim() || isLoading"
            @click="sendMessage"
          >
            <Send :size="24" />
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Mic, Send } from 'lucide-vue-next'
import { useMessageStore } from '@/stores/messageStore'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import { OPENAI_CONFIG } from '@/config.js'

// Store
const messageStore = useMessageStore()

// State
const currentMessage = ref('')
const messages = ref([])
const isLoading = ref(false)
const isListening = ref(false)
const messagesContainer = ref(null)

// Suggested prompts
const suggestedPrompts = [
  "Suggest 3 unique gift ideas for someone who loves [hobby or interest]",
  "Plan a sophisticated 3-course meal for my dinner party of 5 guests for under $50",
  "Give me 5 ways to make my [room/office/desk/car] cozier"
]

// Auto-scroll to bottom when new messages arrive
const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// Call ChatGPT API
const callChatGPT = async (messages) => {
  if (!OPENAI_CONFIG.API_KEY) {
    throw new Error('OpenAI API key not configured')
  }

  const response = await fetch(OPENAI_CONFIG.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_CONFIG.API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
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

// Handle sending messages
const sendMessage = async () => {
  const message = currentMessage.value.trim()
  if (!message || isLoading.value) return
  
  if (!messageStore.canSendMessage()) {
    // Add a temporary message to show rate limiting
    messages.value.push({
      role: 'assistant',
      content: 'Please wait a moment before sending another message',
      isStreaming: false
    })
    await scrollToBottom()
    return
  }

  // Add user message
  messages.value.push({
    role: 'user',
    content: message
  })
  messageStore.addMessage(message)
  
  currentMessage.value = ''
  await scrollToBottom()

  // Add placeholder for assistant response
  messages.value.push({
    role: 'assistant',
    content: '',
    isStreaming: true
  })

  isLoading.value = true

  try {
    const { stream, decoder } = await callChatGPT(messages.value)
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
            
            // Update the current assistant message
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

    // Final message update
    messages.value[messages.value.length - 1] = {
      role: 'assistant',
      content: accumulatedResponse,
      isStreaming: false
    }

  } catch (error) {
    console.error('Error sending message:', error)
    messages.value[messages.value.length - 1] = {
      role: 'assistant',
      content: 'Sorry, there was an error processing your request. Please try again',
      isStreaming: false
    }
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}

// Handle selecting a suggested prompt
const selectPrompt = (prompt) => {
  currentMessage.value = prompt
}

// Speech-to-text functionality (placeholder)
const toggleSpeechInput = () => {
  isListening.value = !isListening.value
}

// Cleanup on component mount
onMounted(() => {
  // Could load chat history from localStorage here if needed
})
</script>

<style scoped>
.typing-indicator {
  animation: blink 1s step-end infinite
}

@keyframes blink {
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
}
</style>
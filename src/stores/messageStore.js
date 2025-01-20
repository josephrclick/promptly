import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messages', {
  state: () => ({
    messages: [],
    lastMessageTime: null,
    messageCount: 0
  }),
  
  actions: {
    addMessage(message) {
      this.messages.push(message)
      this.lastMessageTime = Date.now()
      this.messageCount++
    },
    
    canSendMessage() {
      // Rate limiting: 3 second delay between messages
      if (this.lastMessageTime && Date.now() - this.lastMessageTime < 3000) {
        return false
      }
      
      // Maximum 25 messages per session
      if (this.messageCount >= 25) {
        return false
      }
      
      return true
    },
    
    clearMessages() {
      this.messages = []
      this.messageCount = 0
      this.lastMessageTime = null
    }
  }
})
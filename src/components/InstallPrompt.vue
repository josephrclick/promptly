<!-- src/components/InstallPrompt.vue -->
<template>
    <div 
      v-if="showPrompt"
      class="fixed bottom-16 left-0 right-0 p-4 z-50"
    >
      <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-4 mx-4">
        <div class="flex items-start justify-between">
          <div class="flex items-center">
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                Install promptly
              </p>
              <p class="text-sm text-gray-600 mt-1">
                {{ instructions }}
              </p>
            </div>
          </div>
          <button
            @click="dismissPrompt"
            class="ml-4 text-gray-400 hover:text-gray-500"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
        <div v-if="deferredPrompt" class="mt-4">
          <button
            @click="installPWA"
            class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Install App
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { XIcon } from 'lucide-vue-next'
  
  const showPrompt = ref(false)
  const deferredPrompt = ref(null)
  const instructions = ref('')
  
  function getInstructions() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    const isAndroid = /Android/.test(navigator.userAgent)
  
    if (isIOS) {
      return 'Tap the share button and then "Add to Home Screen" to install'
    }
    if (deferredPrompt.value) {
      return 'Install this app on your phone for quick access'
    }
    if (isAndroid) {
      return 'Open in Chrome and tap "Add to Home Screen" to install'
    }
    return 'Install this app for quick access'
  }
  
  // Handle install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt.value = e
    showPrompt.value = true
    instructions.value = getInstructions()
  })
  
  const installPWA = async () => {
    if (!deferredPrompt.value) return
    
    deferredPrompt.value.prompt()
    const result = await deferredPrompt.value.userChoice
    
    if (result.outcome === 'accepted') {
      console.log('PWA installed')
      showPrompt.value = false
    }
    
    deferredPrompt.value = null
  }
  
  const dismissPrompt = () => {
    showPrompt.value = false
    localStorage.setItem('pwaPromptDismissed', 'true')
  }
  
  onMounted(() => {
    // Only show prompt if not already installed and not previously dismissed
    if (window.matchMedia('(display-mode: standalone)').matches) return
    if (localStorage.getItem('pwaPromptDismissed')) return
    
    // Set initial instructions
    instructions.value = getInstructions()
    
    // Show prompt after a short delay
    setTimeout(() => {
      showPrompt.value = true
    }, 2000)
  })
  </script>
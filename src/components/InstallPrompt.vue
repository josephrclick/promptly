<!-- src/components/InstallPrompt.vue -->
<template>
    <div 
      v-if="showPrompt && !isStandalone"
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
        <div v-if="canInstall" class="mt-4">
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
  const isStandalone = ref(false)
  const canInstall = ref(false)
  
  function getInstructions() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    const isAndroid = /Android/.test(navigator.userAgent)
  
    if (isIOS) {
      return 'Tap the share button (↑) then "Add to Home Screen" to install'
    }
    if (canInstall.value) {
      return 'Install this app on your phone for quick access'
    }
    if (isAndroid) {
      return 'Open in Chrome and tap "Add to Home Screen" to install'
    }
    return 'Install this app for quick access'
  }
  
  // Handle install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault()
    // Stash the event so it can be triggered later
    deferredPrompt.value = e
    canInstall.value = true
    showPrompt.value = true
    instructions.value = getInstructions()
  })
  
  // Track successful installs
  window.addEventListener('appinstalled', () => {
    // Clear the deferredPrompt so it can be garbage collected
    deferredPrompt.value = null
    canInstall.value = false
    showPrompt.value = false
    // Optionally, send analytics event
    console.log('PWA was installed')
  })
  
  const installPWA = async () => {
    if (!deferredPrompt.value) return
    
    try {
      // Show the install prompt
      deferredPrompt.value.prompt()
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.value.userChoice
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt')
      } else {
        console.log('User dismissed the install prompt')
      }
    } catch (err) {
      console.error('Error during installation:', err)
    } finally {
      deferredPrompt.value = null
      canInstall.value = false
    }
  }
  
  const dismissPrompt = () => {
    showPrompt.value = false
    localStorage.setItem('pwaPromptDismissed', 'true')
  }
  
  onMounted(() => {
    // Check if running as standalone PWA
    isStandalone.value = window.matchMedia('(display-mode: standalone)').matches ||
                        window.navigator.standalone || 
                        document.referrer.includes('android-app://')
                        
    // Don't show if already installed or previously dismissed
    if (isStandalone.value || localStorage.getItem('pwaPromptDismissed')) return
    
    // Set initial instructions
    instructions.value = getInstructions()
    
    // Show prompt after a delay
    setTimeout(() => {
      showPrompt.value = true
    }, 2000)
  })
  </script>
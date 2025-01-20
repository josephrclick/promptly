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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { XIcon } from 'lucide-vue-next'

const showPrompt = ref(false)
const deferredPrompt = ref(null)
const instructions = ref('')
const isStandalone = ref(false)
const canInstall = ref(false)
let autoDismissTimer = null

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
  e.preventDefault()
  deferredPrompt.value = e
  canInstall.value = true
  showPrompt.value = true
  instructions.value = getInstructions()
  startAutoDismissTimer()
})

window.addEventListener('appinstalled', () => {
  deferredPrompt.value = null
  canInstall.value = false
  showPrompt.value = false
  clearAutoDismissTimer()
  console.log('PWA was installed')
})

const startAutoDismissTimer = () => {
  clearAutoDismissTimer() // Clear any existing timer
  autoDismissTimer = setTimeout(() => {
    dismissPrompt()
  }, 8000) // 8 seconds
}

const clearAutoDismissTimer = () => {
  if (autoDismissTimer) {
    clearTimeout(autoDismissTimer)
    autoDismissTimer = null
  }
}

const installPWA = async () => {
  if (!deferredPrompt.value) return
  
  clearAutoDismissTimer() // Clear timer when installing
  
  try {
    deferredPrompt.value.prompt()
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
  clearAutoDismissTimer()
}

onMounted(() => {
  isStandalone.value = window.matchMedia('(display-mode: standalone)').matches ||
                      window.navigator.standalone || 
                      document.referrer.includes('android-app://')
                      
  if (isStandalone.value || localStorage.getItem('pwaPromptDismissed')) return
  
  instructions.value = getInstructions()
  
  setTimeout(() => {
    showPrompt.value = true
    startAutoDismissTimer()
  }, 2000)
})

// Clean up timer when component is destroyed
onBeforeUnmount(() => {
  clearAutoDismissTimer()
})
</script>
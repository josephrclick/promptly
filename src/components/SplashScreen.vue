<!-- src/components/SplashScreen.vue -->
<template>
    <Transition name="fade">
      <div 
        v-if="isVisible"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div class="flex flex-col items-center">
          <!-- Logo -->
          <img 
            src="./splash-logo.png"
            alt="Promptly Logo"
            class="w-50 h-60 mb-4 animate-pulse"
          />
          <!-- App Name -->
          <h1 class="text-3xl font-bold text-gray-900">
            promptly.
          </h1>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const isVisible = ref(true)
  
  onMounted(() => {
    // Hide splash screen after 4 seconds
    setTimeout(() => {
      isVisible.value = false
    }, 3000)
  })
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  </style>
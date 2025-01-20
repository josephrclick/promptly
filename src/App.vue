<!-- src/App.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <SplashScreen />
    
    <router-view v-slot="{ Component }" class="flex-grow pb-16">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <FooterNav />
    <InstallPrompt />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import FooterNav from '@/components/FooterNav.vue'
import SplashScreen from '@/components/SplashScreen.vue'
import InstallPrompt from '@/components/InstallPrompt.vue'

onMounted(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
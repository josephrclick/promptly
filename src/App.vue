<!-- src/App.vue -->
<template>
  <Analytics />
  <div class="min-h-screen flex flex-col">
    <SplashScreen />
    <div class="flex-grow pb-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <div>
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </div>
    <FooterNav />
    <InstallPrompt />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import FooterNav from '@/components/FooterNav.vue'
import SplashScreen from '@/components/SplashScreen.vue'
import InstallPrompt from '@/components/InstallPrompt.vue'
import { Analytics } from "@vercel/analytics/react"

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
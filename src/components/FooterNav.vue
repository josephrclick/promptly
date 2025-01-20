<!-- src/components/FooterNav.vue -->
<template>
  <nav 
    v-if="!isChatRoute"
    class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100"
  >
    <div class="flex justify-between px-2 py-1">
      <router-link 
        v-for="item in navItems" 
        :key="item.route" 
        :to="item.route"
        class="flex flex-col items-center px-3 py-1 rounded-lg min-w-[72px]"
        :class="[
          isActiveRoute(item.route) 
            ? 'text-green-600 bg-amber-50' 
            : 'text-gray-600 hover:text-gray-900',
          item.title === 'Learn' && !isActiveRoute(item.route) ? 'bg-blue-50' : ''
        ]"
      >
        <component 
          :is="item.icon" 
          class="w-6 h-6"
          :strokeWidth="1.5"
        />
        <span class="text-sm mt-1 font-medium">{{ item.title }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Home, BookOpen, Rocket, RadioTower, MessageSquare } from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  {
    title: 'Home',
    route: '/',
    icon: Home
  },
  {
    title: 'Learn',
    route: '/learn',
    icon: BookOpen
  },
  {
    title: 'Use',
    route: '/use',
    icon: Rocket
  },
  {
    title: 'News',
    route: '/news',
    icon: RadioTower
  }
]

const isChatRoute = computed(() => {
  // Check if the current route path includes 'chat-now'
  return route.path.includes('chat-now')
})

const isActiveRoute = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  // Only match exact path or direct children, but not grandchildren
  return route.path === path || 
         (route.path.startsWith(path + '/') && 
          route.path.split('/').length === path.split('/').length + 1)
}
</script>
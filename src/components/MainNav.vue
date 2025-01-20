<!-- src/components/MainNav.vue -->
<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-12">
        <div class="flex items-center">
          <button 
            class="p-2 rounded-md hover:bg-gray-100"
            aria-label="Main menu"
          >
            <Menu class="h-6 w-6 text-gray-600" />
          </button>
          <span class="ml-4 text-xl font-semibold text-gray-900">
            <router-link 
            to="/" 
            class="text-gray-600 hover:text-gray-900"
          >
            prompt
          </router-link>
          </span>
        </div>
        <div class="flex items-center space-x-4">
          <router-link 
            to="/register" 
            class="text-gray-600 hover:text-gray-900"
          >
            Register
          </router-link>
          <router-link 
            to="/signin" 
            class="text-gray-600 hover:text-gray-900"
          >
            Sign In
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Menu } from 'lucide-vue-next'
</script>
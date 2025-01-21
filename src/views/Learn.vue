<!-- src/views/Learn.vue -->
<template>
  <div class="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
    <Breadcrumbs class="m-4 mb-1" />
    <header class="flex-none text-center py-10 px-4">
      <h1 class="text-3xl font-bold text-gray-900">Learn ChatGPT</h1>
      <p class="text-base text-gray-600 mt-3">Whoever told you to do this is an amazing person.</p>
    </header>

    <!-- Main Content with more spacing -->
    <main class="flex-grow px-6 pb-4 overflow-auto">
      <div class="grid gap-4">
        <!-- Beginner Section -->
        <router-link to="/learn/beginner" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Beginner</h2>
                <p class="text-base text-gray-600">Just get started. Learn the basics.</p>
              </div>
              <BookOpen 
                class="text-blue-600 ml-4"
                :size="28"
                :strokeWidth="1.5"
              />
            </div>
          </div>
        </router-link>

        <!-- Advanced Section -->
        <router-link to="/learn/advanced" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Advanced</h2>
                <p class="text-base text-gray-600">Level Up. Unleash the beast.</p>
              </div>
              <Rocket 
                class="text-green-600 ml-4"
                :size="28"
                :strokeWidth="1.5"
              />
            </div>
          </div>
        </router-link>

        <!-- Resources Section -->
        <router-link to="/learn/daily-exercise" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Resources</h2>
                <p class="text-base text-gray-600">Links to quality learning materials.</p>
              </div>
              <Lightbulb 
                class="text-amber-600 ml-4"
                :size="28"
                :strokeWidth="1.5"
              />
            </div>
          </div>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
import { BookOpen, Rocket, Lightbulb } from 'lucide-vue-next'
import Breadcrumbs from '@/components/Breadcrumbs.vue';
</script>
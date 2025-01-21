<!-- src/views/learn/Beginner.vue -->
<template>
  
  <div class="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
    <Breadcrumbs class="m-4 mb-1" />
    <!-- Header with larger text -->
    <header class="flex-none text-center py-10 px-4">
      <h1 class="text-3xl font-bold text-gray-900">Advanced Courses</h1>
      <p class="text-base text-gray-600 mt-3">Dive Deeper. Unlock the value of AI in your life.</p>
    </header>

    <!-- Main Content with more spacing -->
    <main class="flex-grow px-6 pb-4 overflow-auto">
      <div class="grid gap-4">
        <!-- Course 1 -->
        <router-link to="./courses/advanced-course-1" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Course 1</h2>
                <p class="text-base text-gray-600">Exploring ChatGPT's full potential.</p>
              </div>
            </div>
          </div>
        </router-link>

        <!-- Course 2 -->
        <router-link to="/learn/courses/advanced-course-2" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Course 2</h2>
                <p class="text-base text-gray-600">Craft better prompts for better results.</p>
              </div>
            </div>
          </div>
        </router-link>

        <!-- Course 3 -->
        <router-link to="/learn/courses/advanced-course-3" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Course 3</h2>
                <p class="text-base text-gray-600">Learn more AI tools than just chat.</p>
              </div>              
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
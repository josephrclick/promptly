<!-- src/views/learn/Beginner.vue -->
<template>
  <div class="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
    <Breadcrumbs class="m-4 mb-1" />
    <header class="flex-none text-center py-10 px-4">
      <h1 class="text-3xl font-bold text-gray-900">Beginner Courses</h1>
      <p class="text-base text-gray-600 mt-3">Start here. Learn the Basics. Get ahead of the curve.</p>
    </header>

    <!-- Main Content with more spacing -->
    <main class="flex-grow px-6 pb-4 overflow-auto">
      <div class="grid gap-4">
        <!-- Course 1 -->
        <router-link to="/learn/courses/beginner-course-1" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Course 1</h2>
                <p class="text-base text-gray-600">What the hell is ChatGPT?</p>
              </div>
              <BookOpen 
                class="text-blue-600 ml-4"
                :size="28"
                :strokeWidth="1.5"
              />
            </div>
          </div>
        </router-link>

        <!-- Course 2 -->
        <router-link to="/learn/courses/beginner-course-2" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Course 2</h2>
                <p class="text-base text-gray-600">Placeholder</p>
              </div>
              <Rocket 
                class="text-green-600 ml-4"
                :size="28"
                :strokeWidth="1.5"
              />
            </div>
          </div>
        </router-link>

        <!-- Course 3 -->
        <router-link to="/learn/courses/beginner-course-3" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Course 3</h2>
                <p class="text-base text-gray-600">Placeholder</p>
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
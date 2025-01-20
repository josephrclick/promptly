<!-- src/views/News.vue -->
<template>
  <div class="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
    <Breadcrumbs class="m-4 mb-1" />
    <header class="flex-none text-center py-10 px-4">
      <h1 class="text-3xl font-bold text-gray-900">ChatGPT News</h1>
      <p class="text-base text-gray-600 mt-3">Stay updated with the latest developments in AI.</p>
    </header>

    <!-- Main Content with more spacing -->
    <main class="flex-grow px-6 pb-4 overflow-auto">
      <div class="grid gap-4">

          <div class="bg-white/60 rounded-xl shadow-md p-5 transition-shadow">
            <div class="flex items-center opacity-50">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Daily News</h2>
                <p class="text-base text-gray-600">Top stories of interest today.</p>
              </div>
            </div>
          </div>        

        <div class="bg-white/60 rounded-xl shadow-md p-5 transition-shadow">
            <div class="flex items-center opacity-50">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Podcasts</h2>
                <p class="text-base text-gray-600">Placeholder.</p>
              </div>
            </div>
          </div>

          <div class="bg-white/60 rounded-xl shadow-md p-5 transition-shadow">
            <div class="flex items-center opacity-50">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Videos</h2>
                <p class="text-base text-gray-600">Placeholder.</p>
              </div>
            </div>
          </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { BookOpen, Rocket, Lightbulb } from 'lucide-vue-next'
import Breadcrumbs from '@/components/Breadcrumbs.vue';
</script>
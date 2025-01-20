<!-- src/views/Use.vue -->
<template>
  <div class="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
    <Breadcrumbs class="m-4 mb-1" />
    <header class="flex-none text-center py-10 px-4">
      <h1 class="text-3xl font-bold text-gray-900">Use ChatGPT</h1>
      <p class="text-base text-gray-600 mt-3">Ready-to-use examples and templates</p>
    </header>

    <!-- Main Content with more spacing -->
    <main class="flex-grow px-6 pb-4 overflow-auto">
      <div class="grid gap-4">
        <!-- Quick Chat Section -->
        <router-link to="/use/chat-now" class="block">
          <div class="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
            <div class="flex items-center">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Quick Chat</h2>
                <p class="text-base text-gray-600">Start a conversation with ChatGPT</p>
              </div>
              <MessageSquare 
                class="text-blue-600 ml-4"
                :size="28"
                :strokeWidth="1.5"
              />
            </div>
          </div>
        </router-link>

        <!-- Templates Section -->
        <!--<router-link to="/use/templates" class="block">-->
          <div class="bg-white/60 rounded-xl shadow-md p-5 transition-shadow">
            <div class="flex items-center opacity-50">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Templates</h2>
                <p class="text-base text-gray-600">Pre-written prompts for common tasks</p>
              </div>
              <FileText 
                class="text-green-600 ml-4"
                :size="28"
                :strokeWidth="1.5"
              />
            </div>
          </div>
        <!--</router-link>-->

        <!-- Use Cases Section -->
        <!--<router-link to="/use/examples" class="block pointer-events-none">-->
          <div class="bg-white/60 rounded-xl shadow-md p-5 transition-shadow">
            <div class="flex items-center opacity-50">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Examples</h2>
                <p class="text-base text-gray-600">See real-world applications</p>
              </div>
              <Lightbulb 
                class="text-amber-600 ml-4"
                :size="28"
                :strokeWidth="1.5"
              />
            </div>
          </div>
        <!--</router-link>-->

        <!-- Expert Tools Section -->
        <!--<router-link to="/use/expert" class="block">-->
          <div class="bg-white/60 rounded-xl shadow-md p-5 transition-shadow">
            <div class="flex items-center opacity-50">
              <div class="flex-grow">
                <h2 class="text-xl font-semibold text-gray-900 mb-1">Expert Tools</h2>
                <p class="text-base text-gray-600">Advanced techniques and strategies</p>
              </div>
              <Settings 
                class="text-purple-600 ml-4"
                :size="28"
                :strokeWidth="1.5"
              />
            </div>
          </div>
        <!--</router-link>-->
      </div>
    </main>
  </div>
</template>

<script setup>
import { MessageSquare, FileText, Lightbulb, Settings } from 'lucide-vue-next'
import Breadcrumbs from '@/components/Breadcrumbs.vue';
</script>
<!-- src/views/Home.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <!-- Hero Section -->
    <section class="py-8 px-6">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          promptly.
        </h1>
        <p class="text-xl text-gray-600">
          A proof of concept mobile-first app built with ChatGPT
          </p>
          </div>
        </section>

    <!-- Main Content -->
    <main class="max-w-3xl mx-auto px-6 pb-8">
      <div class="space-y-8">
        <!-- Personal Story Cards -->
        <section class="bg-white rounded-2xl shadow-lg p-8">
          <p class="text-gray-800 text-lg leading-relaxed mb-6">
            I built this app casually over a weekend using ChatGPT.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            I've been telling everyone we all need to learn the skills right now to benefit from the AI tech revolution taking place, so I thought I'd see if I could build something like a mobile app to help my friends and family get up to speed with the technology.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            My intent is to get you to have (possibly?) your first chat with ChatGPT <b>right now</b>, provide some curated learning content, and share some neat examples of how to get value from the tool.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            Maybe I'll keep working and build out the other features on the app but for now it's a minimum viable product that was just neat to work on.
          </p>
          <h2 class="text-xl font-semibold mb-4">
            Ready to Try ChatGPT?
          </h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Before you check the Learn section, try this: 👇
          </p>
          
        </section>

        <!-- Call to Action -->
        <router-link to="/use/chat-now" class="block">
          <section class="bg-blue-600 rounded-2xl shadow-lg p-8 text-white">
            <p class="text-lg text-center">
              Tap here to start a new free chat with ChatGPT in this app
            </p>
          </section>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ArrowDown } from 'lucide-vue-next'
</script>
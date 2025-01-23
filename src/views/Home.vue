<!-- src/views/Home.vue -->
<template>
  <SpeedInsights />
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <!-- Hero Section -->
    <section class="py-8 px-6">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          promptly.
        </h1>
        <p class="text-xl text-gray-600">
          A <i>proof of concept</i> mobile-first web app built with ChatGPT
          </p>
          </div>
        </section>

    <!-- Main Content -->
    <main class="max-w-3xl mx-auto px-6 pb-24">
      <div class="space-y-4">
        <!-- Personal Story Cards -->
        <section class="bg-white rounded-2xl shadow-lg p-8">
          <p class="text-gray-800 text-lg leading-relaxed mb-6">
            v1.0.6 - I built this app from scratch over a weekend using ChatGPT. I write code for fun sometimes and this would have taken me weeks of work on my own to figure out. Instead, it's like I guided an expert coder and watched over its shoulder the whole time and I learned a ton.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            I've probably talked with you recently about all this, which is why you're reading this right now. Maybe you've never asked ChatGPT a question. Maybe you have zero idea what any of this is. Maybe you've heard the buzz but like what's the big deal...
          </p>
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            The big deal may not be obvious at first, but if you spend some time talking with ChatGPT, ideas will start to pop up and you'll explore more and more. I bet you'll be constantly impressed by what these AI models can do and you will find neat ways to use them in your life.
          </p>
          <h2 class="text-xl font-semibold">
            Ready to try it? 👇
          </h2>
          
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
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>
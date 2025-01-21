<!-- src/views/Home.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
    <Breadcrumbs class="m-4 mb-1" />
    <header class="flex-none text-center py-10 px-4">
      <h1 class="text-3xl font-bold text-gray-900">Resources</h1>
      <p class="text-base text-gray-600 mt-3">Places to visit next and continue your learning.</p>
    </header>

        <main class="max-w-3xl mx-auto px-6 pb-8">
          <div class="space-y-4">
            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h2 class="text-xl font-semibold text-gray-800 mb-4">Beginner-Friendly AI Resources</h2>
              <p class="text-gray-700 text-lg leading-relaxed mb-6">
                Ready to explore AI tools and concepts beyond the basics? These curated resources are perfect for entry-level users who want to discover practical applications, real-world use cases, and fun projects with AI.
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">1. AI Explained</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Beginner-friendly articles and guides that simplify AI concepts with practical examples. Perfect for getting started.  
                <a href="https://www.aiexplained.com" class="text-blue-600 underline">Visit AI Explained</a>
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">2. ChatGPT Official Help Center</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Learn how to make the most of ChatGPT with tutorials, FAQs, and usage examples directly from OpenAI.  
                <a href="https://help.openai.com" class="text-blue-600 underline">Visit ChatGPT Help Center</a>
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">3. The AI Classroom</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Discover creative and practical AI use cases with step-by-step guides for everyday applications.  
                <a href="https://www.theaiclassroom.com" class="text-blue-600 underline">Visit The AI Classroom</a>
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">4. Everyday AI by Zapier</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Explore how to use AI tools for productivity, automation, and creative tasks in everyday life.  
                <a href="https://zapier.com/blog/tag/ai/" class="text-blue-600 underline">Visit Everyday AI</a>
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">5. AI Starter Pack</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                A curated set of resources to jumpstart your AI journey, featuring fun projects and practical tips.  
                <a href="https://www.aistarterpack.com" class="text-blue-600 underline">Visit AI Starter Pack</a>
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">6. Beginner’s Guide to AI by HubSpot</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                HubSpot’s beginner-friendly guide explains AI’s potential in content creation, marketing, and daily tasks.  
                <a href="https://blog.hubspot.com/artificial-intelligence" class="text-blue-600 underline">Visit HubSpot AI Guide</a>
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">7. Substack AI Newsletters (e.g., "AI Made Simple")</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Receive engaging newsletters about AI tools, updates, and examples for non-technical users.  
                <a href="https://www.substack.com" class="text-blue-600 underline">Visit Substack AI</a>
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">8. AI for Everyone by Andrew Ng</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                A free, beginner-friendly Coursera course that explains AI in simple terms with practical applications.  
                <a href="https://www.coursera.org/learn/ai-for-everyone" class="text-blue-600 underline">Visit AI for Everyone</a>
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">9. Artificial Intelligence for Beginners on LinkedIn Learning</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Video courses designed for newcomers, covering AI basics and practical tools for personal or professional use.  
                <a href="https://www.linkedin.com/learning/" class="text-blue-600 underline">Visit LinkedIn Learning</a>
              </p>
            </section>

            <section class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">10. AI Tools Directory by Product Hunt</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Explore a directory of AI tools with ratings, descriptions, and examples to find the right tools for your needs.  
                <a href="https://www.producthunt.com/" class="text-blue-600 underline">Visit Product Hunt AI Directory</a>
              </p>
            </section>
          </div>
        </main>

  </div>
</template>

<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
</script>
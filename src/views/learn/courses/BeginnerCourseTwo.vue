<!-- src/views/courses/BeginnerCourse2.vue -->
<template>
  <CourseContentLayout
    title="Start using ChatGPT?"
    subtitle="Just talk!"
    :total-pages="7"
    course-level="beginner"
  >
  <template #default="{ page }">
  <!-- Content changes based on current page -->
  <div v-if="page === 0">
    <h2 class="text-xl font-semibold mb-4">Say Hello!</h2>
    <p class="mb-4">
      Starting is simple—just say hi or ask a quick question! Examples:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“Hi ChatGPT!”</li>
      <li>“Can you help me with something?”</li>
    </ul>
    <p>
      💬 Don’t overthink it; just start chatting!
    </p>
  </div>

  <div v-else-if="page === 1">
    <h2 class="text-xl font-semibold mb-4">Be Specific</h2>
    <p class="mb-4">
      The clearer your question, the better the response. For example:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Vague: “Tell me about plants.”</li>
      <li>Specific: “What are some easy-to-grow houseplants?”</li>
    </ul>
    <p>
      🎯 Aim for clarity to get the best results.
    </p>
  </div>

  <div v-else-if="page === 2">
    <h2 class="text-xl font-semibold mb-4">Keep It Short or Go Long</h2>
    <p class="mb-4">
      ChatGPT works well with both short and detailed prompts. Examples:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Short: “What’s the weather?”</li>
      <li>Detailed: “What should I pack for a summer trip to Italy?”</li>
    </ul>
    <p>
      Experiment with different prompt lengths and see what works best for you!
    </p>
  </div>

  <div v-else-if="page === 3">
    <h2 class="text-xl font-semibold mb-4">Always Follow Up</h2>
    <p class="mb-4">
      If the answer isn’t what you hoped for, ask again! Try these follow-ups:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“Can you explain that in simpler terms?”</li>
      <li>“What are some other options?”</li>
    </ul>
    <p>
      🗣️ Think of it as a back-and-forth conversation.
    </p>
  </div>

  <div v-else-if="page === 4">
    <h2 class="text-xl font-semibold mb-4">Use Context</h2>
    <p class="mb-4">
      Providing context can lead to better answers. For example:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Instead of: “What’s a good hobby?”</li>
      <li>Try: “What’s a good hobby for someone who loves nature and photography?”</li>
    </ul>
    <p>
      More details help ChatGPT understand exactly what you need.
    </p>
  </div>

  <div v-else-if="page === 5">
    <h2 class="text-xl font-semibold mb-4">Try Asking for Help</h2>
    <p class="mb-4">
      ChatGPT can assist with all sorts of tasks. Here are some ideas:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“Help me plan a healthy meal.”</li>
      <li>“Write an email to my boss about taking a day off.”</li>
      <li>“Can you summarize this article for me?”</li>
    </ul>
    <p>
      🧠 Let it support you with tasks, big or small!
    </p>
  </div>

  <div v-else-if="page === 6">
    <h2 class="text-xl font-semibold mb-4">Keep Going!</h2>
    <p class="mb-4">
      Challenge ChatGPT with different types of questions to explore its potential:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Creative: “Write a short story about a time traveler.”</li>
      <li>Practical: “What’s the best way to organize my closet?”</li>
    </ul>
    <p>
      🌟 The more you try, the more confident you’ll become!
    </p>
  </div>
</template>


  </CourseContentLayout>
</template>

<script setup>
import CourseContentLayout from '@/components/CourseContentLayout.vue'
</script>
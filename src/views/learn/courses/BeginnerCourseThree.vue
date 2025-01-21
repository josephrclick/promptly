<!-- src/views/courses/BeginnerCourse1.vue -->
<template>
  <CourseContentLayout
    title="Getting Comfortable"
    subtitle="Build Confidence and Discover New Uses"
    :total-pages="7"
    course-level="beginner"
  >
  <template #default="{ page }">
  <!-- Content changes based on current page -->
  <div v-if="page === 0">
    <h2 class="text-xl font-semibold mb-4">Getting Comfortable</h2>
    <p class="mb-4">
      New things can feel awkward at first. That’s totally okay! Start with light, fun questions to ease into it:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“What’s a joke about penguins?”</li>
      <li>“What are some cool trivia facts?”</li>
    </ul>
    <p>
      🧠 The key is to explore without pressure.
    </p>
  </div>

  <div v-else-if="page === 1">
    <h2 class="text-xl font-semibold mb-4">Experiment and Play</h2>
    <p class="mb-4">
      Try using ChatGPT in different ways:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Ask for creative ideas or inspiration.</li>
      <li>Have it explain tricky topics in simple terms.</li>
      <li>Plan your day or brainstorm new projects.</li>
    </ul>
    <p>
      🧪 Experimentation is the best way to discover its potential!
    </p>
  </div>

  <div v-else-if="page === 2">
    <h2 class="text-xl font-semibold mb-4">Practice Makes Perfect</h2>
    <p class="mb-4">
      The more you use ChatGPT, the better you’ll understand:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>How to phrase questions clearly.</li>
      <li>What it’s great at (and what it’s not).</li>
    </ul>
    <p>
      Each interaction helps you get more comfortable with its strengths and quirks.
    </p>
  </div>

  <div v-else-if="page === 3">
    <h2 class="text-xl font-semibold mb-4">Learn Through Discovery</h2>
    <p class="mb-4">
      Over time, you’ll find the use cases that work best for you. Here are a few ideas:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Writing help: Drafting emails, essays, or stories.</li>
      <li>Hobby advice: Gardening, photography, or cooking.</li>
      <li>Technical support: Coding tips or explanations.</li>
    </ul>
    <p>
      🌟 Discovering new ways to use ChatGPT is part of the fun!
    </p>
  </div>

  <div v-else-if="page === 4">
    <h2 class="text-xl font-semibold mb-4">Ask for Ideas</h2>
    <p class="mb-4">
      Not sure what to try? Ask ChatGPT directly:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“What are some ways you can help me?”</li>
      <li>“What’s something fun I can do with ChatGPT?”</li>
    </ul>
    <p>
      🤔 You might discover uses you never thought of!
    </p>
  </div>

  <div v-else-if="page === 5">
    <h2 class="text-xl font-semibold mb-4">Review and Reflect</h2>
    <p class="mb-4">
      Take time to reflect on your interactions:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>What types of questions worked best?</li>
      <li>What surprised you about ChatGPT?</li>
    </ul>
    <p>
      ✍️ Keep notes of useful prompts or insights for future conversations.
    </p>
  </div>

  <div v-else-if="page === 6">
    <h2 class="text-xl font-semibold mb-4">Keep Exploring!</h2>
    <p class="mb-4">
      The more you explore, the more possibilities you’ll uncover. Here are some advanced ideas:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Solve puzzles or play games with ChatGPT.</li>
      <li>Ask it to simulate a conversation or role-play a scenario.</li>
      <li>Use it to simplify or teach complex concepts.</li>
    </ul>
    <p>
      🎉 The journey doesn’t end here—ChatGPT grows with you as you keep experimenting!
    </p>
  </div>
</template>


  </CourseContentLayout>
</template>

<script setup>
import CourseContentLayout from '@/components/CourseContentLayout.vue'
</script>
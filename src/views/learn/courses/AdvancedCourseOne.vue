<!-- src/views/courses/BeginnerCourse2.vue -->
<template>
  <CourseContentLayout
    title="Exploring ChatGPT's Full Potential"
    subtitle="Unlock Creative, Practical, and Fun Uses for Every Day"
    :total-pages="7"
    course-level="advanced"
  >

  <template #default="{ page }">
  <!-- Content changes based on current page -->
  <div v-if="page === 0">
    <h2 class="text-xl font-semibold mb-4">Explore ChatGPT's Versatility</h2>
    <p class="mb-4">
      ChatGPT is more than just a question-answer tool. It’s a versatile assistant for creativity, problem-solving, and organization.
    </p>
    <p>
      🌟 Let’s explore unique and exciting ways to use ChatGPT!
    </p>
  </div>

  <div v-else-if="page === 1">
    <h2 class="text-xl font-semibold mb-4">Creative Writing</h2>
    <p class="mb-4">
      Use ChatGPT for creative tasks like:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Writing stories, poems, or scripts</li>
      <li>Generating ideas for essays or projects</li>
      <li>Editing and refining written work</li>
    </ul>
    <p>
      ✍️ It’s like having a co-writer at your fingertips!
    </p>
  </div>

  <div v-else-if="page === 2">
    <h2 class="text-xl font-semibold mb-4">Personal Planning</h2>
    <p class="mb-4">
      ChatGPT can help you organize your day or tackle big goals. Try tasks like:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Creating to-do lists</li>
      <li>Planning events or trips</li>
      <li>Setting and tracking goals</li>
    </ul>
    <p>
      🎯 Simplify your life with a little AI support.
    </p>
  </div>

  <div v-else-if="page === 3">
    <h2 class="text-xl font-semibold mb-4">Learning and Research</h2>
    <p class="mb-4">
      Expand your knowledge by using ChatGPT for:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Summarizing articles or books</li>
      <li>Explaining difficult concepts</li>
      <li>Providing study tips or quizzes</li>
    </ul>
    <p>
      🧠 A perfect tool for students and lifelong learners alike.
    </p>
  </div>

  <div v-else-if="page === 4">
    <h2 class="text-xl font-semibold mb-4">Creative Brainstorming</h2>
    <p class="mb-4">
      Stuck on an idea? ChatGPT can spark creativity by:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Offering innovative solutions to problems</li>
      <li>Generating names, slogans, or taglines</li>
      <li>Suggesting new approaches to projects</li>
    </ul>
    <p>
      🚀 Break through creative blocks with AI inspiration.
    </p>
  </div>

  <div v-else-if="page === 5">
    <h2 class="text-xl font-semibold mb-4">Problem Solving</h2>
    <p class="mb-4">
      ChatGPT can help you tackle challenges like:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Debugging code or understanding errors</li>
      <li>Finding step-by-step solutions to technical problems</li>
      <li>Recommending tools or resources</li>
    </ul>
    <p>
      🔧 Use it as a problem-solving partner.
    </p>
  </div>

  <div v-else-if="page === 6">
    <h2 class="text-xl font-semibold mb-4">Have Fun with ChatGPT</h2>
    <p class="mb-4">
      ChatGPT isn’t all work—try some fun activities like:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Playing text-based games or puzzles</li>
      <li>Creating fictional characters or worlds</li>
      <li>Exploring “what if” scenarios</li>
    </ul>
    <p>
      🎉 Discover the entertaining side of AI!
    </p>
  </div>
</template>


  </CourseContentLayout>
</template>

<script setup>
import CourseContentLayout from '@/components/CourseContentLayout.vue'
</script>
<!-- src/views/courses/BeginnerCourse1.vue -->
<template>
  <CourseContentLayout
    title="What is ChatGPT?"
    subtitle="A Beginner's Guide"
    :total-pages="3"
    course-level="beginner"
  >
    <template #default="{ page }">
      <!-- Content changes based on current page -->
      <div v-if="page === 0">
        <h2 class="text-xl font-semibold mb-4">Welcome to ChatGPT</h2>
        <p class="mb-4">
          ChatGPT is an AI language model that can understand and generate human-like text. 
          It's like having a conversation with a knowledgeable assistant who can help you 
          with various tasks.
        </p>
        <p>
          In this course, we'll explore what ChatGPT can do and how to use it effectively.
        </p>
      </div>

      <div v-else-if="page === 1">
        <h2 class="text-xl font-semibold mb-4">What Can ChatGPT Do?</h2>
        <p class="mb-4">
          ChatGPT can help you with many tasks including:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>Writing and editing</li>
          <li>Answering questions</li>
          <li>Explaining complex topics</li>
          <li>Coding assistance</li>
        </ul>
      </div>

      <div v-else-if="page === 2">
        <h2 class="text-xl font-semibold mb-4">Getting Started</h2>
        <p class="mb-4">
          Ready to try ChatGPT? Here are some tips:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>Be specific in your requests</li>
          <li>Ask follow-up questions</li>
          <li>Provide context when needed</li>
        </ul>
        <p>
          Let's try it out in the next section!
        </p>
      </div>
    </template>
  </CourseContentLayout>
</template>

<script setup>
import CourseContentLayout from '@/components/CourseContentLayout.vue'
</script>
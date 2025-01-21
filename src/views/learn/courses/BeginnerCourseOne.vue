<!-- src/views/courses/BeginnerCourse1.vue -->
<template>
  <CourseContentLayout
    title="What is ChatGPT?"
    subtitle="A Beginner's Guide"
    :total-pages="7"
    course-level="beginner"
  >
  <template #default="{ page }">
  <!-- Content changes based on current page -->
  <div v-if="page === 0">
    <h2 class="text-xl font-semibold mb-4">What is ChatGPT?</h2>
    <p class="mb-4">
      ChatGPT is a conversational AI that helps you with tasks like answering questions, generating ideas, and solving problems. It's like having a virtual assistant ready to chat about almost anything!
    </p>
  </div>

  <div v-else-if="page === 1">
    <h2 class="text-xl font-semibold mb-4">How Does ChatGPT Work?</h2>
    <p class="mb-4">
      ChatGPT processes your input and predicts the best response based on patterns it has learned. Think of it as a super-powered autocomplete for conversations.
    </p>
    <p>
      📝 <strong>Remember:</strong> ChatGPT doesn’t "think" or "feel." It’s great with text but doesn’t understand the world like humans do.
    </p>
  </div>

  <div v-else-if="page === 2">
    <h2 class="text-xl font-semibold mb-4">What Does ChatGPT Know?</h2>
    <p class="mb-4">
      ChatGPT is knowledgeable about a wide range of topics including history, science, writing, and coding. However, it doesn’t have access to real-time updates or private information about you.
    </p>
    <p>
      🚧 <strong>Limitations:</strong> Be mindful that ChatGPT might not always have the latest news or accurate real-time data.
    </p>
  </div>

  <div v-else-if="page === 3">
    <h2 class="text-xl font-semibold mb-4">ChatGPT's Strengths</h2>
    <p class="mb-4">
      Here are a few things ChatGPT does really well:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Explaining complex ideas simply</li>
      <li>Helping brainstorm creative solutions</li>
      <li>Offering suggestions for projects</li>
    </ul>
    <p>
      Think of it as your personal assistant for text-based tasks.
    </p>
  </div>

  <div v-else-if="page === 4">
    <h2 class="text-xl font-semibold mb-4">ChatGPT's Limitations</h2>
    <p class="mb-4">
      While ChatGPT is powerful, it has limitations:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>It might make mistakes or guess when unsure.</li>
      <li>It can’t access real-time data or provide personal advice.</li>
      <li>Fact-check important information, as ChatGPT can sometimes be incorrect.</li>
    </ul>
    <p>
      🔑 <strong>Pro Tip:</strong> Use ChatGPT as a helpful guide, not an ultimate authority.
    </p>
  </div>

  <div v-else-if="page === 5">
    <h2 class="text-xl font-semibold mb-4">Safe and Fun Interactions</h2>
    <p class="mb-4">
      You’re in control of your ChatGPT experience. Remember:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>Privacy:</strong> ChatGPT doesn’t save your conversations.</li>
      <li><strong>Fun:</strong> Ask silly questions or try lighthearted topics like jokes or trivia!</li>
    </ul>
  </div>

  <div v-else-if="page === 6">
    <h2 class="text-xl font-semibold mb-4">Your Turn to Try!</h2>
    <p class="mb-4">
      Let’s get started with your first interaction. Try asking something simple:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“What is ChatGPT best used for?”</li>
      <li>“What’s a fun fact about animals?”</li>
      <li>“Can you help me plan my weekend?”</li>
    </ul>
    <p>
      See how ChatGPT responds and have fun exploring its capabilities!
    </p>
  </div>
</template>

  </CourseContentLayout>
</template>

<script setup>
import CourseContentLayout from '@/components/CourseContentLayout.vue'
</script>
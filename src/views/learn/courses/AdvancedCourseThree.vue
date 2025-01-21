<!-- src/views/courses/BeginnerCourse2.vue -->
<template>
  <CourseContentLayout
    title="Exploring Advanced AI Tools and Features"
    subtitle="Expand Your Knowledge with Cutting-Edge AI Capabilities"
    :total-pages="7"
    course-level="advanced"
  >

  <template #default="{ page }">
  <!-- Content changes based on current page -->
  <div v-if="page === 0">
    <h2 class="text-xl font-semibold mb-4">Discover Other AI Capabilities</h2>
    <p class="mb-4">
      ChatGPT is just one of many amazing AI tools out there. Explore the possibilities to expand your creative and practical toolkit.
    </p>
  </div>

  <div v-else-if="page === 1">
    <h2 class="text-xl font-semibold mb-4">Image Generation</h2>
    <p class="mb-4">
      Some AI models can create stunning images based on your descriptions. Examples:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Design a logo for a project</li>
      <li>Create a fantasy landscape for storytelling</li>
      <li>Generate coloring book pages for kids</li>
    </ul>
    <p>
      🎨 Turn your ideas into visuals with ease.
    </p>
  </div>

  <div v-else-if="page === 2">
    <h2 class="text-xl font-semibold mb-4">Document Analysis</h2>
    <p class="mb-4">
      Some advanced AI tools allow you to upload files for analysis or feedback. Examples include:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Reviewing a resume or business proposal</li>
      <li>Extracting key points from long documents</li>
      <li>Generating summaries or reports</li>
    </ul>
    <p>
      📄 Save time on document-related tasks.
    </p>
  </div>

  <div v-else-if="page === 3">
    <h2 class="text-xl font-semibold mb-4">Photo Recognition</h2>
    <p class="mb-4">
      Imagine uploading a photo and asking AI for help. Possibilities include:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Finding items in a cluttered closet</li>
      <li>Identifying plants, animals, or objects</li>
      <li>Providing suggestions based on visual content</li>
    </ul>
    <p>
      📸 AI is making image-based tasks smarter and faster.
    </p>
  </div>

  <div v-else-if="page === 4">
    <h2 class="text-xl font-semibold mb-4">Voice Assistance</h2>
    <p class="mb-4">
      Some AI systems support voice interaction. Use your voice to:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Dictate messages or notes</li>
      <li>Ask questions hands-free</li>
      <li>Interact in a more natural, conversational way</li>
    </ul>
    <p>
      🎤 Voice capabilities make AI even more accessible.
    </p>
  </div>

  <div v-else-if="page === 5">
    <h2 class="text-xl font-semibold mb-4">Cross-Tool Integration</h2>
    <p class="mb-4">
      Combine AI tools for even greater efficiency. For example:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Use ChatGPT for research and an image generator for visuals</li>
      <li>Automate tasks by integrating AI with your favorite apps</li>
      <li>Streamline workflows across different platforms</li>
    </ul>
    <p>
      🤖 Collaborate with AI tools to expand possibilities.
    </p>
  </div>

  <div v-else-if="page === 6">
    <h2 class="text-xl font-semibold mb-4">Stay Curious</h2>
    <p class="mb-4">
      AI technology is evolving fast. Stay curious and keep exploring:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Try new tools and features as they emerge</li>
      <li>Read about the latest developments in AI</li>
      <li>Experiment with creative and practical use cases</li>
    </ul>
    <p>
      🌟 The more you learn, the more you'll unlock the full potential of AI.
    </p>
  </div>
</template>

  </CourseContentLayout>
</template>

<script setup>
import CourseContentLayout from '@/components/CourseContentLayout.vue'
</script>
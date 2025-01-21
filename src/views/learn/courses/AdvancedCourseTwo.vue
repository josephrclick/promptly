<!-- src/views/courses/BeginnerCourse2.vue -->
<template>
  <CourseContentLayout
    title="Mastering the Art of Prompting"
    subtitle="Craft Better Prompts to Get the Most from ChatGPT"
    :total-pages="7"
    course-level="advanced"
  >

  <template #default="{ page }">
  <!-- Content changes based on current page -->
  <div v-if="page === 0">
    <h2 class="text-xl font-semibold mb-4">Mastering Prompt Writing</h2>
    <p class="mb-4">
      Writing effective prompts is key to getting the best results from ChatGPT. Let’s learn how to master this skill!
    </p>
  </div>

  <div v-else-if="page === 1">
    <h2 class="text-xl font-semibold mb-4">Start with Clear Goals</h2>
    <p class="mb-4">
      Before you type, ask yourself: “What do I want from this interaction?” Examples:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“Explain quantum physics simply.”</li>
      <li>“Generate three creative ideas for a birthday party.”</li>
      <li>“Help me write an email about rescheduling a meeting.”</li>
    </ul>
    <p>
      🎯 A clear goal leads to better answers.
    </p>
  </div>

  <div v-else-if="page === 2">
    <h2 class="text-xl font-semibold mb-4">Use Context</h2>
    <p class="mb-4">
      Context helps ChatGPT tailor its responses. Include background information in your prompt:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“I’m writing a fantasy novel. Can you describe a magical forest?”</li>
      <li>“I need help with a professional email to my team about deadlines.”</li>
    </ul>
    <p>
      🧠 Context helps refine results to match your needs.
    </p>
  </div>

  <div v-else-if="page === 3">
    <h2 class="text-xl font-semibold mb-4">Experiment with Styles</h2>
    <p class="mb-4">
      ChatGPT can adapt to different tones and styles. Experiment by requesting:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Formal or casual responses</li>
      <li>Creative or concise explanations</li>
      <li>Bullet points or paragraph summaries</li>
    </ul>
    <p>
      🖌️ Fine-tune responses to suit your preferences.
    </p>
  </div>

  <div v-else-if="page === 4">
    <h2 class="text-xl font-semibold mb-4">Priming the AI</h2>
    <p class="mb-4">
      Start your prompt by setting expectations. Examples:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“Act as a career coach. What advice would you give about networking?”</li>
      <li>“You are a travel guide. Recommend places to visit in Japan.”</li>
    </ul>
    <p>
      📌 Priming helps ChatGPT deliver more tailored responses.
    </p>
  </div>

  <div v-else-if="page === 5">
    <h2 class="text-xl font-semibold mb-4">Iterate and Refine</h2>
    <p class="mb-4">
      If the first answer isn’t perfect, ask for improvements:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>“Can you simplify that further?”</li>
      <li>“Add more examples to this explanation.”</li>
    </ul>
    <p>
      🔄 Iterating is a natural part of getting the best results.
    </p>
  </div>

  <div v-else-if="page === 6">
    <h2 class="text-xl font-semibold mb-4">Practice Makes Perfect</h2>
    <p class="mb-4">
      The more you practice writing prompts, the better you’ll get. Try:
    </p>
    <ul class="list-disc pl-6 mb-4">
      <li>Asking for feedback from ChatGPT on your prompts</li>
      <li>Exploring different topics and styles</li>
      <li>Challenging the AI with complex or creative requests</li>
    </ul>
    <p>
      🌟 Great prompts unlock ChatGPT’s full potential.
    </p>
  </div>
</template>


  </CourseContentLayout>
</template>

<script setup>
import CourseContentLayout from '@/components/CourseContentLayout.vue'
</script>
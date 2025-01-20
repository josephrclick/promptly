<!-- src/views/use/UseCases.vue -->
<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="prose max-w-none">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ title }}</h2>
      <div class="mb-6">
        <p class="text-gray-600">{{ description }}</p>
      </div>
      
      <div class="grid gap-6 md:grid-cols-2">
        <div 
          v-for="item in content" 
          :key="item.id"
          class="border rounded-lg p-4 hover:border-blue-500 transition-colors"
        >
          <h3 class="text-lg font-medium text-gray-900 mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 mb-4">{{ item.description }}</p>
          <button 
            class="text-blue-600 hover:text-blue-700 font-medium"
            @click="handleItemClick(item)"
          >
            Learn more →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/stores/main'

const store = useMainStore()

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Use Cases'
  },
  description: {
    type: String,
    required: true,
    default: 'Explore real-world applications of ChatGPT'
  }
})

const content = ref([
  {
    id: 1,
    title: 'Content Writing',
    description: 'Learn how to use ChatGPT for content creation and editing'
  },
  {
    id: 2,
    title: 'Code Assistance',
    description: 'Discover how to leverage ChatGPT for coding help'
  }
])

const handleItemClick = (item) => {
  console.log('Item clicked:', item)
}
</script>
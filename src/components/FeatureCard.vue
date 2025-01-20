<!-- src/components/FeatureCard.vue -->
<template>
  <div 
    class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    @click="$emit('click')"
  >
    <div class="grid grid-cols-5 gap-3">
      <div class="col-span-4">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>
      <div class="flex justify-end">
        <component 
          :is="icon" 
          :class="iconColorClass"
          :size="iconSize"
          :strokeWidth="strokeWidth"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { BookOpen, Newspaper, Lightbulb, Rocket } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  iconSize: {
    type: Number,
    default: 48 // equivalent to w-12 h-12
  },
  iconColor: {
    type: String,
    default: 'blue-600'
  },
  strokeWidth: {
    type: Number,
    default: 2
  }
})

const iconComponents = {
  BookOpen,
  Newspaper,
  Lightbulb,
  Rocket
}

const icon = iconComponents[props.icon]

// Compute the Tailwind color class for the icon
const iconColorClass = computed(() => `text-${props.iconColor}`)

defineEmits(['click'])
</script>
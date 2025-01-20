<!-- src/components/CategoryCard.vue -->
<template>
  <div 
    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer h-24"
    @click="$emit('click')"
  >
    <div class="flex h-full items-center p-4">
      <div class="flex-1">
        <h2 class="text-lg font-semibold text-gray-900">{{ title }}</h2>
        <p class="text-sm text-gray-600">{{ description }}</p>
      </div>
      <div class="flex items-center justify-center ml-4">
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
import { BookOpenCheck, Rocket, RadioTower } from 'lucide-vue-next'
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
    default: 28
  },
  iconColor: {
    type: String,
    default: 'blue-600'
  },
  strokeWidth: {
    type: Number,
    default: 1.5
  }
})

const iconComponents = {
  BookOpenCheck,
  Rocket,
  RadioTower
}

const icon = iconComponents[props.icon]
const iconColorClass = computed(() => `text-${props.iconColor}`)

defineEmits(['click'])
</script>
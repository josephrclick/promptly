<!-- src/components/ContentCard.vue -->
<template>
  <article 
    class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
    @click="navigateToContent"
  >
    <!-- Image Section -->
    <div class="relative aspect-video overflow-hidden bg-gray-100">
      <img 
        v-if="thumbnail"
        :src="thumbnail"
        :alt="title"
        class="w-full h-full object-cover"
      />
      <div 
        v-else 
        class="w-full h-full flex items-center justify-center"
      >
        <component
          :is="contentTypeIcon"
          class="w-12 h-12 text-gray-400"
        />
      </div>
      
      <!-- Content Type Badge -->
      <div 
        v-if="type"
        class="absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded"
        :class="typeClasses"
      >
        {{ type }}
      </div>
    </div>

    <!-- Content Section -->
    <div class="flex flex-col flex-grow p-5">
      <!-- Title -->
      <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 text-sm mb-4 line-clamp-3">
        {{ description }}
      </p>

      <!-- Metadata Footer -->
      <div class="mt-auto flex items-center text-sm text-gray-500">
        <!-- Author Info -->
        <div v-if="author" class="flex items-center">
          <img 
            v-if="author.avatar"
            :src="author.avatar"
            :alt="author.name"
            class="w-6 h-6 rounded-full mr-2"
          />
          <span>{{ author.name }}</span>
        </div>

        <!-- Date & Reading Time -->
        <div class="ml-auto flex items-center space-x-3">
          <span v-if="publishDate">{{ formatDate(publishDate) }}</span>
          <span 
            v-if="readingTime" 
            class="flex items-center"
          >
            <Clock class="w-4 h-4 mr-1" />
            {{ readingTime }} min read
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Book, FileText, VideoCamera, Clock } from 'lucide-vue-next'

const router = useRouter()

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    default: null
  },
  type: {
    type: String,
    validator: (value) => ['article', 'tutorial', 'guide', 'video', 'tip'].includes(value),
    default: 'article'
  },
  route: {
    type: String,
    required: true
  },
  author: {
    type: Object,
    default: null,
    validator: (value) => {
      if (value === null) return true
      return 'name' in value
    }
  },
  publishDate: {
    type: [Date, String],
    default: null
  },
  readingTime: {
    type: Number,
    default: null
  }
})

// Computed type-specific styles and icons
const typeClasses = computed(() => {
  const classes = {
    article: 'bg-blue-100 text-blue-800',
    tutorial: 'bg-green-100 text-green-800',
    guide: 'bg-purple-100 text-purple-800',
    video: 'bg-red-100 text-red-800',
    tip: 'bg-yellow-100 text-yellow-800'
  }
  return classes[props.type] || classes.article
})

const contentTypeIcon = computed(() => {
  const icons = {
    article: FileText,
    tutorial: Book,
    guide: Book,
    video: VideoCamera,
    tip: FileText
  }
  return icons[props.type] || FileText
})

// Date formatting
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(date).toLocaleDateString(undefined, options)
}

// Navigation
const navigateToContent = () => {
  router.push(props.route)
}
</script>
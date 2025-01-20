<!-- src/components/CourseContentLayout.vue -->
<template>
    <div class="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <!-- Header with Breadcrumbs -->
      <Breadcrumbs class="m-4 mb-1" />
      
      <header class="flex-none text-center py-4 px-4">
        <h1 class="text-2xl font-bold text-gray-900">{{ title }}</h1>
        <p v-if="subtitle" class="text-sm text-gray-600 mt-1">{{ subtitle }}</p>
      </header>
  
      <!-- Content Card -->
      <main class="flex-grow px-6 flex items-center justify-center">
        <div 
          class="w-full bg-white rounded-2xl shadow-lg p-8 overflow-hidden cursor-pointer"
          @click="nextPage"
        >
          <!-- Progress indicator -->
          <div class="flex justify-between items-center mb-4 text-sm text-gray-500">
            <span>{{ currentPage + 1 }} of {{ totalPages }}</span>
            <div class="flex gap-1">
              <div 
                v-for="i in totalPages" 
                :key="i"
                class="w-2 h-2 rounded-full"
                :class="i - 1 === currentPage ? 'bg-blue-500' : 'bg-gray-200'"
              ></div>
            </div>
          </div>
  
          <!-- Content Container -->
          <Transition name="fade" mode="out-in">
            <div 
              :key="currentPage"
              class="min-h-[300px] flex flex-col justify-between"
            >
              <!-- Actual content slot -->
              <div class="prose prose-sm max-w-none">
                <slot :page="currentPage" />
              </div>
  
              <!-- Navigation hints -->
              <div class="mt-4 text-sm text-gray-500 text-center">
                <template v-if="currentPage < totalPages - 1">
                  Tap to continue
                </template>
                <template v-else>
                  Course complete! Tap to return to courses
                </template>
              </div>
            </div>
          </Transition>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Breadcrumbs from '@/components/Breadcrumbs.vue'
  
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    totalPages: {
      type: Number,
      required: true
    },
    courseLevel: {
      type: String,
      default: 'beginner',
      validator: (value) => ['beginner', 'advanced'].includes(value)
    }
  })
  
  const currentPage = ref(0)
  
  import { useRouter } from 'vue-router'
  const router = useRouter()
  
  const nextPage = () => {
    if (currentPage.value < props.totalPages - 1) {
      currentPage.value++
    } else {
      // Navigate back to course listing
      router.push(`/learn/${props.courseLevel}`)
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
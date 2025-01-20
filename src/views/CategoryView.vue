<!-- src/views/CategoryView.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Category Header -->
    <header class="bg-white border-b">
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ category.title }}</h1>
          <p class="text-lg text-gray-600">{{ category.description }}</p>
        </div>
      </div>
    </header>

    <!-- Category Content -->
    <main class="container mx-auto px-4 py-12">
      <!-- Subcategories Grid -->
      <section v-if="category.subcategories?.length" class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Topics</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="subcategory in category.subcategories" 
            :key="subcategory.id"
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            @click="navigateToSubcategory(subcategory.route)"
          >
            <component 
              :is="subcategory.icon" 
              class="w-8 h-8 text-blue-600 mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ subcategory.title }}
            </h3>
            <p class="text-gray-600">{{ subcategory.description }}</p>
          </div>
        </div>
      </section>

      <!-- Featured Content -->
      <section v-if="category.featuredContent?.length" class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Featured</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard 
            v-for="content in category.featuredContent"
            :key="content.id"
            v-bind="content"
          />
        </div>
      </section>

      <!-- Latest Content -->
      <section v-if="category.latestContent?.length">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-gray-900">Latest</h2>
          <ContentFilter 
            v-if="category.filters"
            v-model="activeFilter"
            :filters="category.filters"
          />
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard 
            v-for="content in filteredContent"
            :key="content.id"
            v-bind="content"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ContentCard from '@/components/ContentCard.vue'
import ContentFilter from '@/components/ContentFilter.vue'
import { BookOpen, Newspaper, Lightbulb } from 'lucide-vue-next'

const router = useRouter()
const activeFilter = ref('all')

// This would be populated based on the route/category
const category = ref({
  title: 'Learn',
  description: 'Master the fundamentals and advanced techniques of using AI language models effectively.',
  subcategories: [
    {
      id: 1,
      title: 'Basics',
      description: 'Get started with the fundamentals of AI language models',
      icon: BookOpen,
      route: '/learn/basics'
    },
    // ... more subcategories
  ],
  featuredContent: [
    // ... featured content items
  ],
  latestContent: [
    // ... latest content items
  ],
  filters: ['all', 'tutorials', 'guides', 'tips']
})

const filteredContent = computed(() => {
  if (activeFilter.value === 'all') {
    return category.value.latestContent
  }
  return category.value.latestContent.filter(
    content => content.type === activeFilter.value
  )
})

const navigateToSubcategory = (route) => {
  router.push(route)
}
</script>
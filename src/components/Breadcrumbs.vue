<!-- src/components/Breadcrumbs.vue -->
<template>
  <nav class="flex px-4 py-2 text-sm" aria-label="Breadcrumbs">
    <ol class="flex items-center space-x-2">
      <!-- Home Link -->
      <li>
        <router-link 
          to="/" 
          class="text-gray-500 hover:text-gray-700"
        >
          <Home class="w-4 h-4" />
        </router-link>
      </li>

      <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
        <!-- Separator -->
        <li class="text-gray-400">
          <ChevronRight class="w-4 h-4" />
        </li>

        <!-- Breadcrumb Item -->
        <li>
          <router-link
            :to="crumb.path"
            :class="[
              'hover:text-gray-700',
              index === breadcrumbs.length - 1 
                ? 'text-gray-900 font-medium' 
                : 'text-gray-500'
            ]"
          >
            {{ formatBreadcrumb(crumb.name) }}
          </router-link>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Home, ChevronRight } from 'lucide-vue-next'

const route = useRoute()

// Map route names to display names
const nameMap = {
  'learn': 'Learn',
  'news': 'News',
  'use': 'Use',
  'beginner': 'Beginner',
  'advanced': 'Advanced',
  'daily-exercise': 'Resources',
  'daily-news': 'Daily',
  'podcasts': 'Podcasts',
  'videos': 'Videos',
  'chat-now': 'Chat Now',
  'daily-idea': 'Daily Idea',
  'use-cases': 'Use Cases',
  'beginner-course-1': 'What is ChatGPT?',
  'beginner-course-2': 'Course 2',
  'beginner-course-3': 'Course 3',
  'advanced-course-1': 'What is ChatGPT?',
  'advanced-course-2': 'Course 2',
  'advanced-course-3': 'Course 3'
}

// Generate breadcrumbs based on current route
const breadcrumbs = computed(() => {
  const pathSegments = route.path.split('/').filter(segment => segment)
  const crumbs = []
  let path = ''

  // Process each segment
  pathSegments.forEach((segment, index) => {
    path += `/${segment}`
    
    // Skip 'courses' in the breadcrumb display
    if (segment === 'courses') return

    // If we're in a course page, modify the hierarchy
    if (segment.includes('beginner-course')) {
      if (!crumbs.some(crumb => crumb.path === '/learn/beginner')) {
        crumbs.push({
          name: 'beginner',
          path: '/learn/beginner'
        })
      }
    }

    // If we're in a course page, modify the hierarchy
    if (segment.includes('advanced-course')) {
      if (!crumbs.some(crumb => crumb.path === '/learn/advanced')) {
        crumbs.push({
          name: 'advanced',
          path: '/learn/advanced'
        })
      }
    }

    const matchedRoute = route.matched.find(r => r.path === path)
    const name = matchedRoute ? matchedRoute.name : segment
    
    crumbs.push({
      name: name,
      path: path
    })
  })

  return crumbs
})

// Format the breadcrumb text
const formatBreadcrumb = (name) => {
  if (typeof name !== 'string') return ''
  return nameMap[name] || name.charAt(0).toUpperCase() + name.slice(1)
}
</script>
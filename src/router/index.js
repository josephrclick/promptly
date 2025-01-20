// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Main views
import Home from '@/views/Home.vue'
import Learn from '@/views/Learn.vue'
import News from '@/views/News.vue'
import Use from '@/views/Use.vue'

// Learn section views
import Beginner from '@/views/learn/Beginner.vue'
import Advanced from '@/views/learn/Advanced.vue'
import DailyExercise from '@/views/learn/DailyExercise.vue'

// Learn courses
import BeginnerCourseOne from '@/views/learn/courses/BeginnerCourseOne.vue'
import BeginnerCourseTwo from '@/views/learn/courses/BeginnerCourseTwo.vue'
import BeginnerCourseThree from '@/views/learn/courses/BeginnerCourseThree.vue'
import AdvancedCourseOne from '@/views/learn/courses/AdvancedCourseOne.vue'
import AdvancedCourseTwo from '@/views/learn/courses/AdvancedCourseTwo.vue'
import AdvancedCourseThree from '@/views/learn/courses/AdvancedCourseThree.vue'

// News section views
import Daily from '@/views/news/Daily.vue'
import Podcasts from '@/views/news/Podcasts.vue'
import Videos from '@/views/news/Videos.vue'

// Use section views
import ChatNow from '@/views/use/ChatNow.vue'
import DailyIdea from '@/views/use/DailyIdea.vue'
import UseCases from '@/views/use/UseCases.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // Learn section
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/learn/courses',
      redirect: '/learn'
    },
    {
      path: '/learn/beginner',
      name: 'beginner',
      component: Beginner
    },
    {
      path: '/learn/advanced',
      name: 'advanced',
      component: Advanced
    },
    {
      path: '/learn/daily-exercise',
      name: 'daily-exercise',
      component: DailyExercise
    },
    // Beginner courses
    {
      path: '/learn/courses/beginner-course-1',
      name: 'beginner-course-1',
      component: BeginnerCourseOne
    },
    {
      path: '/learn/courses/beginner-course-2',
      name: 'beginner-course-2',
      component: BeginnerCourseTwo
    },
    {
      path: '/learn/courses/beginner-course-3',
      name: 'beginner-course-3',
      component: BeginnerCourseThree
    },
    // Advanced Courses
    {
      path: '/learn/courses/advanced-course-1',
      name: 'advanced-course-1',
      component: AdvancedCourseOne
    },
    {
      path: '/learn/courses/advanced-course-2',
      name: 'advanced-course-2',
      component: AdvancedCourseTwo
    },
    {
      path: '/learn/courses/advanced-course-3',
      name: 'advanced-course-3',
      component: AdvancedCourseThree
    },
    // News section
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/news/daily',
      name: 'daily-news',
      component: Daily
    },
    {
      path: '/news/podcasts',
      name: 'podcasts',
      component: Podcasts
    },
    {
      path: '/news/videos',
      name: 'videos',
      component: Videos
    },
    // Use section
    {
      path: '/use',
      name: 'use',
      component: Use
    },
    {
      path: '/use/chat-now',
      name: 'chat-now',
      component: ChatNow
    },
    {
      path: '/use/daily-idea',
      name: 'daily-idea',
      component: DailyIdea
    },
    {
      path: '/use/use-cases',
      name: 'use-cases',
      component: UseCases
    }
  ]
})

export default router
// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('@/views/Learn.vue')
    },
    {
      path: '/learn/beginner',
      name: 'beginner',
      component: () => import('@/views/learn/Beginner.vue')
    },
    {
      path: '/learn/advanced',
      name: 'advanced',
      component: () => import('@/views/learn/Advanced.vue')
    },
    {
      path: '/learn/daily-exercise',
      name: 'daily-exercise',
      component: () => import('@/views/learn/DailyExercise.vue')
    },
    // Beginner courses
    {
      path: '/learn/courses/beginner-course-1',
      name: 'beginner-course-1',
      component: () => import('@/views/learn/courses/BeginnerCourseOne.vue')
    },
    {
      path: '/learn/courses/beginner-course-2',
      name: 'beginner-course-2',
      component: () => import('@/views/learn/courses/BeginnerCourseTwo.vue')
    },
    {
      path: '/learn/courses/beginner-course-3',
      name: 'beginner-course-3',
      component: () => import('@/views/learn/courses/BeginnerCourseThree.vue')
    },
    // Advanced courses
    {
      path: '/learn/courses/advanced-course-1',
      name: 'advanced-course-1',
      component: () => import('@/views/learn/courses/AdvancedCourseOne.vue')
    },
    {
      path: '/learn/courses/advanced-course-2',
      name: 'advanced-course-2',
      component: () => import('@/views/learn/courses/AdvancedCourseTwo.vue')
    },
    {
      path: '/learn/courses/advanced-course-3',
      name: 'advanced-course-3',
      component: () => import('@/views/learn/courses/AdvancedCourseThree.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/News.vue')
    },
    {
      path: '/use',
      name: 'use',
      component: () => import('@/views/Use.vue')
    },
    {
      path: '/use/chat-now',
      name: 'chat-now',
      component: () => import('@/views/use/ChatNow.vue')
    }
  ]
})

export default router
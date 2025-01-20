import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    user: null,
    notifications: [],
    currentSection: null,
    content: {
      learn: {
        beginner: [],
        advanced: []
      },
      news: {
        daily: [],
        podcasts: [],
        videos: []
      },
      use: {
        dailyIdea: null,
        useCases: []
      }
    },
    isOffline: false
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    unreadNotifications: (state) =>
      state.notifications.filter((n) => !n.read).length,
    getCurrentSectionContent: (state) => {
      if (!state.currentSection) return null
      return state.content[state.currentSection]
    }
  },

  actions: {
    setCurrentSection(section) {
      this.currentSection = section
    },

    updateOfflineStatus(status) {
      this.isOffline = status
    },

    async fetchSectionContent(section) {
      try {
        const response = await fetch(`/api/${section}`)
        const data = await response.json()
        this.content[section] = data
      } catch (error) {
        console.error('Error fetching content:', error)
      }
    },

    addNotification(notification) {
      this.notifications.push({
        ...notification,
        id: Date.now(),
        read: false,
        timestamp: new Date()
      })
    }
  }
})
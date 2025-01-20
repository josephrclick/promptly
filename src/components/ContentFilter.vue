<!-- src/components/ContentFilter.vue -->
<template>
  <div class="flex flex-col sm:flex-row gap-4">
    <!-- Mobile Filter Button -->
    <button
      v-if="isMobile"
      type="button"
      class="sm:hidden inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      @click="isFilterMenuOpen = true"
    >
      <SlidersHorizontal class="h-4 w-4 mr-2" />
      Filter
      <span 
        v-if="activeFilterCount" 
        class="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full"
      >
        {{ activeFilterCount }}
      </span>
    </button>

    <!-- Desktop Filters -->
    <div class="hidden sm:flex items-center space-x-4">
      <!-- View Toggle -->
      <div class="flex items-center bg-gray-100 rounded-lg p-1">
        <button
          v-for="view in viewOptions"
          :key="view.value"
          class="p-1.5 rounded-md transition-colors"
          :class="[
            currentView === view.value 
              ? 'bg-white shadow-sm text-gray-900' 
              : 'text-gray-500 hover:text-gray-900'
          ]"
          @click="updateView(view.value)"
          :aria-label="'Switch to ' + view.label + ' view'"
        >
          <component :is="view.icon" class="w-5 h-5" />
        </button>
      </div>

      <!-- Filter Pills -->
      <div class="flex items-center space-x-2">
        <button
          v-for="filter in filters"
          :key="filter.value"
          class="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
          :class="[
            modelValue === filter.value
              ? 'bg-blue-100 text-blue-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
          @click="$emit('update:modelValue', filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Sort Dropdown -->
      <div class="relative">
        <button
          type="button"
          class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900"
          @click="isSortMenuOpen = !isSortMenuOpen"
          aria-haspopup="true"
          :aria-expanded="isSortMenuOpen"
        >
          <ArrowUpDown class="w-4 h-4 mr-1" />
          Sort
          <ChevronDown class="w-4 h-4 ml-1" />
        </button>

        <!-- Sort Menu -->
        <div
          v-if="isSortMenuOpen"
          class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
        >
          <div 
            class="py-1" 
            role="menu" 
            aria-orientation="vertical"
          >
            <button
              v-for="option in sortOptions"
              :key="option.value"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              @click="updateSort(option.value)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Filter Menu -->
    <TransitionRoot appear :show="isFilterMenuOpen" as="template">
      <Dialog 
        as="div" 
        class="relative z-50" 
        @close="isFilterMenuOpen = false"
      >
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <DialogTitle class="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Filter Content
                </DialogTitle>

                <div class="space-y-4">
                  <!-- Mobile Filter Options -->
                  <div class="space-y-2">
                    <p class="text-sm font-medium text-gray-700">View</p>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="view in viewOptions"
                        :key="view.value"
                        class="inline-flex items-center px-3 py-1.5 rounded-md text-sm"
                        :class="[
                          currentView === view.value 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-gray-100 text-gray-600'
                        ]"
                        @click="updateView(view.value)"
                      >
                        <component :is="view.icon" class="w-4 h-4 mr-1.5" />
                        {{ view.label }}
                      </button>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <p class="text-sm font-medium text-gray-700">Content Type</p>
                    <div class="flex flex-wrap gap-2">
                      <button
                        v-for="filter in filters"
                        :key="filter.value"
                        class="px-3 py-1.5 rounded-full text-sm"
                        :class="[
                          modelValue === filter.value
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                        ]"
                        @click="$emit('update:modelValue', filter.value)"
                      >
                        {{ filter.label }}
                      </button>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <p class="text-sm font-medium text-gray-700">Sort By</p>
                    <div class="space-y-2">
                      <button
                        v-for="option in sortOptions"
                        :key="option.value"
                        class="w-full text-left px-3 py-2 rounded-md text-sm"
                        :class="[
                          currentSort === option.value
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-600'
                        ]"
                        @click="updateSort(option.value)"
                      >
                        {{ option.label }}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mt-6 flex justify-end">
                  <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                    @click="isFilterMenuOpen = false"
                  >
                    Done
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  ArrowUpDown, 
  ChevronDown 
} from 'lucide-vue-next'
import { useMediaQuery } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  filters: {
    type: Array,
    default: () => [
      { label: 'All', value: 'all' },
      { label: 'Tutorials', value: 'tutorial' },
      { label: 'Articles', value: 'article' },
      { label: 'Tips', value: 'tip' }
    ]
  }
})

const emit = defineEmits(['update:modelValue', 'update:view', 'update:sort'])

// State
const isFilterMenuOpen = ref(false)
const isSortMenuOpen = ref(false)
const currentView = ref('grid')
const currentSort = ref('newest')
const isMobile = useMediaQuery('(max-width: 640px)')

// View options
const viewOptions = [
  { label: 'Grid', value: 'grid', icon: LayoutGrid },
  { label: 'List', value: 'list', icon: List }
]

// Sort options
const sortOptions = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
  { label: 'Most Popular', value: 'popular' },
  { label: 'Title A-Z', value: 'title' }
]

// Active filter count for mobile badge
const activeFilterCount = computed(() => {
  let count = 0
  if (props.modelValue !== 'all') count++
  if (currentSort.value !== 'newest') count++
  return count || null
})

// Methods
const updateView = (view) => {
  currentView.value = view
  emit('update:view', view)
  if (isMobile.value) isFilterMenuOpen.value = false
}

const updateSort = (sort) => {
  currentSort.value = sort
  emit('update:sort', sort)
  isSortMenuOpen.value = false
  if (isMobile.value) isFilterMenuOpen.value = false
}
</script>
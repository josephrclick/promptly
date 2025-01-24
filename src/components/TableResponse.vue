<!-- src/components/TableResponse.vue -->
<template>
    <div class="overflow-x-auto rounded-lg border border-gray-200 my-4">
      <table class="min-w-full divide-y divide-gray-200">
        <!-- Table Header -->
        <thead class="bg-gray-50">
          <tr>
            <th 
              v-for="(header, index) in headers" 
              :key="index"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <!-- Table Body -->
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="hover:bg-gray-50">
            <td 
              v-for="(cell, cellIndex) in row" 
              :key="cellIndex"
              class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
            >
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  })
  </script>
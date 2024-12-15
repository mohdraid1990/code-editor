<template>
  <div class="problem-description">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Coding Challenge'
  },
  description: {
    type: String,
    default: 'Write a program that prints "Hello, World!" in your chosen programming language.'
  }
})
</script>
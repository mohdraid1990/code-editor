<template>
  <div :class="['output-container', status]">
    <pre>{{ output }}</pre>
  </div>
</template>

<script setup>
defineProps({
  output: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})
</script>
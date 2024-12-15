<template>
  <select
    :value="selectedLanguage"
    @input="$emit('update:language', $event.target.value)"
    class="select-language"
  >
    <option value="php">PHP</option>
    <option value="cpp">C++</option>
    <option value="go">Go</option>
    <option value="javascript">JavaScript</option>
  </select>
</template>

<script setup>
defineProps({
  selectedLanguage: {
    type: String,
    required: true,
  },
});

defineEmits(["update:language"]);
</script>

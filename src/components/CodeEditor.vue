<template>
  <div class="editor-container">
    <div class="controls">
      <LanguageSelector 
        :selected-language="selectedLanguage" 
        @update:language="updateLanguage" 
      />
      <button @click="runCode" class="run-button">Run Code</button>
    </div>

    <ClientOnly>
      <Codemirror
        v-model="code"
        :style="{ height: '400px' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
      />
    </ClientOnly>

    <OutputDisplay 
      v-if="output" 
      :output="output" 
      :status="outputStatus" 
    />
  </div>
</template>

<script setup>
import { Codemirror } from 'vue-codemirror'
import LanguageSelector from './LanguageSelector.vue'
import OutputDisplay from './OutputDisplay.vue'
import { useCodeEditor } from '../composables/useCodeEditor'

const { 
  selectedLanguage,
  code,
  output,
  outputStatus,
  extensions,
  updateLanguage,
  runCode
} = useCodeEditor()
</script>
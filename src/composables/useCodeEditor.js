import { ref, computed, watch } from 'vue';
import { php } from '@codemirror/lang-php';
import { cpp } from '@codemirror/lang-cpp';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { defaultCode } from '../utils/codeTemplates';
import { mockExecuteCode } from '../utils/codeExecutor';

export function useCodeEditor() {
  const selectedLanguage = ref('javascript');
  const output = ref('');
  const outputStatus = ref('');
  const code = ref(defaultCode.javascript);


  watch(selectedLanguage, (newLang) => {
    code.value = defaultCode[newLang];
  });

  const extensions = computed(() => {
    const langExtension = {
      php: php(),
      cpp: cpp(),
      go: javascript(), 
      javascript: javascript()
    }[selectedLanguage.value];

    return [langExtension, oneDark];
  });


  const updateLanguage = (newLang) => {
    selectedLanguage.value = newLang;
  };


  const runCode = async () => {
    try {
      const result = await mockExecuteCode(code.value, selectedLanguage.value);
      output.value = result.output;
      outputStatus.value = result.status;
    } catch (error) {
      output.value = error.message;
      outputStatus.value = 'error';
    }
  };

  return {
    selectedLanguage,
    code,
    output,
    outputStatus,
    extensions,
    updateLanguage,
    runCode,
  };
}

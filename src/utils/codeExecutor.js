const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function mockExecuteCode(code, language) {
  await delay(1000); // Simulate network delay

  // Mock execution results for different languages
  const results = {
    php: {
      output: "PHP Output: Hello, World!",
      status: "success",
    },
    cpp: {
      output: "C++ Output: Hello, World!",
      status: "success",
    },
    go: {
      output: "Go Output: Hello, World!",
      status: "success",
    },
    javascript: {
      output: "JavaScript Output: Hello, World!",
      status: "success",
    },
  };

  // Simulate random errors (20% chance)
  if (Math.random() < 0.2) {
    throw new Error(
      `${language.toUpperCase()} Compilation Error: Syntax error at line 1`
    );
  }

  return (
    results[language] || {
      output: "Language not supported",
      status: "error",
    }
  );
}

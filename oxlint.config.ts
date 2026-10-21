import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['typescript', 'react', 'unicorn', 'oxc'],
  categories: {
    correctness: 'error',
  },
  env: {
    browser: true,
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    'react/rules-of-hooks': 'error',
    'react/exhaustive-deps': 'error',
    'react/only-export-components': ['error', { allowConstantExport: true }],
  },
  ignorePatterns: ['dist'],
})

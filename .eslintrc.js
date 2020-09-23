module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'prettier/prettier': ['error', {}, {usePrettierrc: true}]
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'prettier/@typescript-eslint',
    'eslint-config-prettier',
    'plugin:prettier/recommended'
  ]
}
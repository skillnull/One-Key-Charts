module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 0
  },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended'
  ]
}
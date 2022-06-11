module.exports = {
  extends: [
    require.resolve('./typescript'),
    'plugin:vue/vue3-recommended',
    'prettier',
  ],

  env: {
    'vue/setup-compiler-macros': true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 在使用 script setup，且有两个 script 块时，以下 3 条规则不适用
        'import/order': 'off',
        'import/first': 'off',
        'import/no-duplicates': 'off',
      },
    },
  ],
}

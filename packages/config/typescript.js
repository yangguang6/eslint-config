module.exports = {
  extends: [
    require.resolve('./basic'),
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}

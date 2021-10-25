const basic = require('@guang/eslint-config-basic')

module.exports = {
  extends: [
    '@guang/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: basic.overrides,
}

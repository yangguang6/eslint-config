const basic = require('@yangguang6/eslint-config-basic')

module.exports = {
  extends: [
    '@yangguang6/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: basic.overrides,
}

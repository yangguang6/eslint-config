module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },

  env: {
    es2022: true,
    browser: true,
    node: true,
  },

  extends: ['eslint:recommended', 'plugin:promise/recommended', 'prettier'],

  plugins: ['import', 'node', 'promise'],

  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.mjs', '.cjs'],
      },
    },
  },

  rules: {
    /* ------------------------------------ base --------------------------------- */

    'no-console': ['error', { allow: ['warn', 'error'] }],
    'block-scoped-var': 'error',
    'eqeqeq': ['error', 'smart'],
    'no-alert': 'warn',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',

    /* ------------------------------------- import --------------------------------- */

    'import/order': 'error',
    'import/no-mutable-exports': 'error',
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false },
    ],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',

    /* ------------------------------------- node ------------------------------------- */

    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/process-exit-as-throw': 'error',
  },
}

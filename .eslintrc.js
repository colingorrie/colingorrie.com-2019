module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:jsx-a11y/strict',
  ],
  globals: {
    __PATH_PREFIX__: true,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['warn'],
        '@typescript-eslint/camelcase': ['warn'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks', 'prettier', 'import'],
  rules: {
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'warn',
    'import/no-amd': 'warn',
    'import/no-commonjs': 'warn',
    'import/no-cycle': 'warn',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

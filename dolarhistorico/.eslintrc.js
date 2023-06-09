module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/indent': 'off',
    'no-trailing-spaces': 'off',
    '@typescript-eslint/key-spacing': 'off',
    'no-multi-spaces': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/keyword-spacing': 'off'
  }
}

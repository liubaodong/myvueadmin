module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0,
    'vue/no-unused-components': 0,
    'eol-last': 0,
    'space-before-function-paren': 0,
    'quotes': 0,
    'no-trailing-spaces': 0,
    'vue/no-unused-vars': 0,
    'vue/valid-v-for': 0,
    'vue/no-duplicate-attributes': 0,
    'vue/no-parsing-error': 0,
    'no-unused-vars': 0,
    'indent': 0,
    'comma-dangle': 0,
    'no-multiple-empty-lines': 0,
    'vue/no-dupe-keys': 'off',
    'vue/require-prop-type-constructor': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

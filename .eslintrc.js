/*
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-03 19:19:15
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-17 18:16:53
 * @FilePath: \myvueadmin\.eslintrc.js
 */
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
    'vue/require-prop-type-constructor': 'off',
    "padded-blocks": 0,
    "space-before-blocks": 0,
    "no-unused-expressions": 0,
    "vue/require-valid-default-prop": 0,
    "spaced-comment": 0,
    "vue/no-side-effects-in-computed-properties": 0,
    "no-return-assign": 0,
    "no-undef": 0,
    "no-unreachable": 0,
    "no-constant-condition": 0,
    "no-multi-spaces": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

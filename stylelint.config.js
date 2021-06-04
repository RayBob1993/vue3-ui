module.exports = {
  extends: [
    'stylelint-config-rational-order'
  ],
  plugins: [
    'stylelint-scss'
  ],
  ignoreFiles: [
    './**/*.js',
    './**/*.json'
  ],
  defaultSeverity: 'error',
  rules: {
    'block-no-empty': true,
    'no-empty-source': null,
    'comment-no-empty': true,
    indentation: 2,
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': true,
        'empty-line-between-groups': true
      }
    ]
  }
};

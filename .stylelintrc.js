module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  // rule覆盖（根据自己喜好来配置）
  rules: {
    'selector-class-pattern': null,
  },
  overrides: [
    // 若项目中存在scss文件，添加以下配置
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
    },
  ],
};

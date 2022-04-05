/**
 * 不是真实的 webpack 配置，仅为兼容 webstorm 和 intellij idea 代码跳转
 * ref: https://github.com/umijs/umi/issues/1109#issuecomment-423380125
 */

module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  // 创建less-loader配置
  // module: {
  //   rules: [
  //     {
  //       test: /\.less$/i,
  //       use: [
  //         // compiles Less to CSS
  //         "style-loader",
  //         "css-loader",
  //         "less-loader",
  //       ],
  //     },
  //   ],
  // },
};

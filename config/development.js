module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      port: 10086,
      proxy: {
        '/api': {
          target: 'http://localhost:9527',
          pathRewrite: { '^': '' },
          changeOrigin: true,
        },
      },
    },
  },
};

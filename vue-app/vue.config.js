module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7040',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};

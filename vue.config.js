module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://data.covid19india.org',
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    }
  }
};

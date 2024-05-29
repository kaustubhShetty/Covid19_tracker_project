// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://data.covid19india.org',
//         changeOrigin: true,
//         pathRewrite: {'^/api': ''}
//       }
//     }
//   }
// };

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/Covid19_tracker_project/' : '/',
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://data.covid19india.org',
//         changeOrigin: true,
//         pathRewrite: {'^/api': ''}
//       }
//     }
//   }
// };

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/Covid19_tracker_project/' : '/',
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://data.covid19india.org',
//         changeOrigin: true,
//         pathRewrite: {'^/api': ''}
//       }
//     }
//   }
// };
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Covid19_tracker_project/' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://data.covid19india.org',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
};


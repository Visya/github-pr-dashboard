import { optimize } from 'webpack';

import config from './webpack.config.babel';

export default {
  ...config,
  plugins: [
    ...config.plugins,
    new optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      compress: {
        warnings: false,
        unused: true,
        dead_code: true // eslint-disable-line camelcase
      }
    })
  ]
};

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: [
    'babel-polyfill',
    './index.jsx',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    root: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['', '.js', '.jsx', '.json'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass',
        ),
      },
    ],
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'index.html',
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};

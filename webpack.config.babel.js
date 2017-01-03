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
    root: path.resolve(__dirname, 'src'),
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
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
        ),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'index.html',
    }),
    new ExtractTextPlugin('[name].css'),
  ],
};

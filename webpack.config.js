import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: './index.jsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
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
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'index.html',
    }),
  ],
};

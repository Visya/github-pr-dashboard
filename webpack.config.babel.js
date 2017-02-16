import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin, optimize } from 'webpack';

const rootDir = path.resolve(__dirname, 'app');

const config = {
  context: rootDir,

  entry: {
    app: [
      'babel-polyfill',
      './index.jsx'
    ],
    vendor: [ 'react', 'react-dom', 'redux', 'react-redux', 'react-router',
      'react-router-redux', 'recompose', 'redux-thunk', 'redux-actions' ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.scss', '.css' ],

    modules: [
      rootDir,
      'node_modules'
    ]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader' ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.css/,
        include: /node_modules\/react-toolbox/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },

  devtool: 'inline-source-map',

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV || JSON.stringify('development')
      }
    }),
    new ExtractTextPlugin('[name].styles.css'),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'index.html',
      chunks: [ 'app', 'vendor' ]
    }),
    new optimize.CommonsChunkPlugin({ names: [ 'vendor' ] })
  ]
};

export default config;

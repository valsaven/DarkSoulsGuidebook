const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:3000',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // the entry point of our app
    './index.js'
  ],
  output: {
    // the output bundle
    filename: 'bundle.js',

    path: resolve(__dirname, 'dist'),

    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/'
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    // enable HMR on the server
    hot: true,

    // match the output path
    contentBase: resolve(__dirname, 'dist'),

    // match the output `publicPath`
    publicPath: '/',

    // set port
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ]
};

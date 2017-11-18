const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  // Relative from root folder
  entry: './src/index.js',
  output: {
    // Absolute path from computer's root
    // - Helped with path.resolve(__dirname)
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        // Chained loaders load right-to-left
        // use: ['style-loader', 'css-loader'],
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        // Chained loaders load right-to-left
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ],
        test: /\.(jpe?g|png|gif|svg)$/
      }
    ]
  },
  plugins: [
    // Extract any files that were transformed by
    // its loader and save into a file: style.css
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;

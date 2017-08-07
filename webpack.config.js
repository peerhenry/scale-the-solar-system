var webpack = require('webpack');

module.exports = {

  context: __dirname,
  entry: './src/main',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
    alias: {}
  },

  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        //exclude: 'node_modules',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  devServer: {
    contentBase: './public'
  }
}
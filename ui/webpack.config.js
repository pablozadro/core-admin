const path = require('path');

module.exports = {
  entry: {
    'core': path.resolve(__dirname, 'src/js/core.js')
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      }      
    ]
  },
  resolve: {
    alias: {
			'@': path.resolve(__dirname, 'src/js')
    },
    extensions: [ '.js']
	},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'assets/js'),
    sourceMapFilename: '[name].bundle.js.map'
  },
  devtool: 'source-map'
};

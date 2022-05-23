//For node to know out absolute file path we will be using the internal module path
const path = require('path');
const webpack = require('webpack');

//Our export here is the configuration webpack we will use
module.exports = {
  //[mode] will determine how our code will be bundled.
  //"development" will be human readable
  //"production" will be minified
  mode: 'development',
  //[entry] this is the file where the bundling starts from.
  entry: './src/index.jsx',
  //[output] is a configuration object to determine how and where to bundle our code
  output: {
    //[path] is where to output
    path: path.join(__dirname, 'public'),
    //[filename] is the name of the file
    filename: 'bundle.js'
  },
  //[module] will allow us to set any external modules we have added to webpack
  module: {
    //[rules] will determine the rules around those external modules
    rules: [
      //the first rule is to identify js and jsx files and turn on babel
      //Loaders are small plugins that basically say “When you encounter this kind of file, do this with it”.
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      //second rule is to check for css files and load them with the following loaders
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: __dirname + '/src'
      }
    ]
  },
  //[devtool] this is an additional source map that will let the browser know what files
  //are running out code
  //This helps with error tracing. Without it we will not know where our errors are
  //coming from because it will state that everything inside the bundle file
  devtool: 'eval-cheap-module-source-map',
  //[devServer] configuration for the live server including port
  devServer: {
    //[static] config for how what to serve
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    //[port] what port our local machine to run the dev server
    port: 3000,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_TOKEN: JSON.stringify(process.env.API_TOKEN),
      },
    }),
  ]
};
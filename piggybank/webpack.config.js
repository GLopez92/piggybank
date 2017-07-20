var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  // This is the entry point or start of our react applicaton
  entry: "./static/app/app.js",
  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "static/bundle.js"
  },

  plugins: [
      //tells webpack where to store data about your bundles.
      // new BundleTracker({filename: './webpack-stats.json'}), 
      //makes jQuery available in every module

      new webpack.ProvidePlugin({ 
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
      })
  ],
    
  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel-loader",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      }
    ]
  },

  resolve: {
      //tells webpack where to look for modules
      modulesDirectories: ['node_modules'],
      //extensions that should be used to resolve modules
      extensions: ['', '.js', '.jsx'] 
  },  
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
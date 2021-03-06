const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ghpages = require('gh-pages');
ghpages.publish('dist',{dest: 'static/project'}, function(err) {});
//const ASSET_PATH = process.env.ASSET_PATH || '/';


module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    //publicPath: 'tamagotchi-saiyan'
  },
  devtool: 'source-map',
  //eval-source-map for development
  //source-map for production
  devServer: {
    contentBase: './dist'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: false,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 8,
          cache: false,
          compress: {
            arrows: true,
            booleans: true,
            collapse_vars: true,
            comparisons: true,
            computed_props: true,
            conditionals: true,
            dead_code: true,
            drop_console: false,
            ecma: 6,
            evaluate: true,
            hoist_funs: false,
            hoist_props: true,
            //hoist_var tends to increase file size if enabled
            hoist_vars: false,
            if_return: true,
            inline: true,
            join_vars: true,
            keep_classnames: false,
            keep_fnames: false,
            keep_infinity: true,
            loops: true,
            negate_iife: true,
            passes: 3,
            properties: true,
            reduce_funcs: false,
            reduce_vars: false,
            sequences: 200,
            side_effects: false,
            switches: true,
            toplevel: false,
            top_retain: null,
            typeofs: false,
            unsafe: false,
            unused: false,
            warnings: false,
          },
          mangle: true,
        }
      })
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
      //'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Tamagotchi Saiyan',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  performance:
  {
    hints: false
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      },
      {
         test: /\.(png|svg|jpg|gif|mp3)$/,
         use: [
           'file-loader'
         ]
       }
    ]
  }
};

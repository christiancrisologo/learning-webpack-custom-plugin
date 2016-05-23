var path=require('path');
var webpack = require('webpack');
var timeStampWebpackPlugin = require('timestamp-webpack-plugin')
module.exports={
    context: path.resolve('js'),
    entry: "./app",
    output:{
        path: path.resolve('build/js'),
        publicPath:'/public/assets/js',
        filename:"bundle.js"
    },
    devServer:{
        contentBase:'public'
    },
    plugins:[
      new webpack.ProvidePlugin({ 
          // this will make the plugin global with the alias $, jQuery 
          //and window.jQuery and will refer as jquery plugin
          $:"jquery",
          jQuery:"jquery",
          "window.jQuery":"jquery"
      }),
      new timeStampWebpackPlugin({ 
          // timestamp plugin aliasses
          path:__dirname,
          filename:'timestamp.json'
      }),
      new webpack.BannerPlugin("*******************************\n generated by webpack ")
      
    ],
    module:{
        loaders:[{
            test:/\.es6$/,
            exclude:/node_mdoules/,
            loader:'babel-loader'
            },
            
        ]
    },
    resolve:{
        extensions:['','.js','.es6']
    }
}
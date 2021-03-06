const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry:'./src/app.jsx',
  output:{
    path:path.resolve(__dirname,'dist'),
    publicPath:'dist',
    filename:'js/app.js'
  },
  resolve:{
    alias:{
      page:path.resolve(__dirname,'src/page'),
      component : path.resolve(__dirname,'src/component'),
      util:path.resolve(__dirname,'src/util'),
      service:path.resolve(__dirname,'src/service')
    }
  },
  module:{
    rules:[
      {
        test:/\.jsx$/,
        exclude:/(node_modules)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['env','react']
          }
        }
      },{
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader'
        })
      },{
        test:/\.scss$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','sass-loader']
        })
      },{
        test:/\.(png|jpg|gif)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:8192,
              name:'resource/[name].[ext]'
            }
          }
        ]
      },{
        test:/\.(eot|svg|ttf|woff|woff2|otf)/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:8192,
              name:'resource/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new ExtractTextPlugin("css/[name].css")
  ],
  devServer:{
    port:8099,
    historyApiFallback:{
      index:'/dist/index.html'
    },
    proxy:{
      '/manage':{
        target:'http://admintest.happymamll.com',
        changeOrigin:true
      },
      '/user/logout.do':{
        target:'http://admintest.happymamll.com',
        changeOrigin:true
      }
    }
  }
}
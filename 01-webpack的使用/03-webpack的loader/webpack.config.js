const path = require('path')
//npm init 初始化npm

//npm install 安装

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve( __dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:'dist/'   //为使url文件编译后得到的路径在编译文件所在的文件夹中
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责将css文件进行加载
        //style-loader负责将样式添加到DOM中
        //使用多个loader时，是从右向左读取
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit时，会将图片编译成base64字符串形式
              //当加载的图片大于limit时，需要file-loader模块进行加载
              limit: 31000
            }
          }
        ]
      }
    ]
  }
}

// 通过修改package.json
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "build": "webpack"
//   },
// 可用npm run build命令运行 webpack

//在控制台直接用webpack调用全局webpack
//有时候实际开发需要适配本地webpack 用npm install webpack@x.x.x --sava-dev 将webpack下载到本地
//这时通过npm run build脚本方式会优先调用本地webpack 若直接用webpack命令还是使用全局webpack
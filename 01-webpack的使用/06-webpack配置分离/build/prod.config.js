const Uglifyjswebpackplugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new Uglifyjswebpackplugin()   //开发中不建议进行丑化
  ]
})


// 通过修改package.json
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "build": "webpack"
//   },
// 可用npm run build命令运行 webpack

//在控制台直接用webpack调用全局webpack
//有时候实际开发需要适配本地webpack 用npm install webpack@x.x.x --sava-dev 将webpack下载到本地
//这时通过npm run build脚本方式会优先调用本地webpack 若直接用webpack命令还是使用全局webpack
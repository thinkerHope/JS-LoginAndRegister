const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  performance: {
    hints: "warning", // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
    // 提供资源文件名的断言函数
    return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    
    }
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        // exclude: [
        //     path.resolve('node_modules');
        // ]
        use:[
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties'],
              cacheDirectory: true,
            }
          }
        ]
      }
      ]
    }
}
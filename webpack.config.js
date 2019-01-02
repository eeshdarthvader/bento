const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundled.js',
    library: 'bento',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "(typeof window !== 'undefined' ? window : this)" // https://github.com/webpack/webpack/issues/6522#issuecomment-371120689
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      }
    ]
  }
};
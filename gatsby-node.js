var WebpackNotifierPlugin = require('webpack-notifier');

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      new WebpackNotifierPlugin(),
    ],
  })
}


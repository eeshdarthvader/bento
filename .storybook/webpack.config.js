const path = require("path");
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  defaultConfig.module.rules.push({
    test: /\.(js|jsx)$/,
    include: path.resolve(appDirectory, 'src'),
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('@babel/preset-react')],
      plugins: [
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
              },
            },
          },
        ],
      ]
    }
  });

  defaultConfig.resolve.extensions.push(".ts", ".tsx");
  defaultConfig.resolve.alias.Bento = path.resolve(appDirectory, "src", "bento");

  return defaultConfig;
};
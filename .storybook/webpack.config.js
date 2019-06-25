const path = require("path");
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());

module.exports = ({ config }) => {

  // removes svg from existing rules
  // see - https://github.com/storybookjs/storybook/issues/6188#issuecomment-487705465
  config.module.rules = config.module.rules.map(rule => {
    if (
      String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      }
    }

    return rule
  })

  // use svgr for svg files
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"],
  })



  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
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

  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias.Bento = path.resolve(appDirectory, "src", "bento");

  return config;
};
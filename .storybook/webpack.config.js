const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = async ({ config }) => {
  config.plugins.push(new MiniCssExtractPlugin());
  config.module.rules.push({
    test: /.scss$/,

    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          includePaths: ['node_modules', 'libs/shared-styles']
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  });

  config.module.rules.push({
    test: /!(.spec).ts$/,
    exclude: /node_modules/,
    loader: 'ts-loader'
  });

  return config;
};

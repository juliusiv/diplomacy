const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, options) => ({
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  entry: {
    app: "./assets/src/App.js",
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "priv/static/js"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    // This filename is referencing the priv/static App.css, the one in src.
    new MiniCssExtractPlugin({ filename: "App.css" }),
    new CopyWebpackPlugin([{ from: "assets/static/", to: "./" }]),
  ],
  resolve: {
    alias: {
      "<diplomacy>": path.resolve(__dirname, "assets/src/"),
      "<style>": path.resolve(__dirname, "assets/src/utils/style.js"),
    },
  },
});

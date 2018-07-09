/*eslint-disable*/
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  resolve: {
    extensions: [".js"],
    modules: ["./src", "./node_modules"],
    unsafeCache: true,
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat",
      "create-react-class": "preact-compat/lib/create-react-class",
      "react-dom-factories": "preact-compat/lib/react-dom-factories",
    },
  },
  output: {
    filename: "[name].[chunkhash:6].bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.((s*)css|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|eot|svg|jpe?g|png|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          enforce: true,
        },
      },
    },
  },
};

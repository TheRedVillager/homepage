const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  entry: [
    path.resolve("src/script/main.ts"),
    path.resolve("src/style/main.scss"),
    path.resolve("src/index.html")
  ],
  mode: "none",
  module: {
    rules: [
      {
        test: /\.[t|j]s$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "style.css"
            }
          },
          "sass-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: {
          loader: "file-loader",
          options: {
            name: "index.html"
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new HtmlMinimizerPlugin()
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "script.js",
    path: path.resolve("dist")
  }
};

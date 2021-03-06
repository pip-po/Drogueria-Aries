const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        filename: "index.html",
        options: {
          publicPath: ''
      },
      }),

      new HtmlWebpackPlugin({
        template: "./src/prodtemplate.html",
        filename: "products.html",
        options: {
          publicPath: ''
      },
      })
    ],
    module: {
      rules: [
        {
            test: /\.scss$/,
            use: [
              "style-loader", //3. Inject styles into DOM
              "css-loader", //2. Turns css into commonjs
              "sass-loader" //1. Turns sass into css
            ]
          }
      ]
    }
});
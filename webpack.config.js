
// Export and import path
const path = require("path");
// HTML path
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/Restaurant-Page/",
  },
  // Html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  // LOADERS
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { // CSS loader
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },      
      { // HTML loader
        test: /\.html$/i,
        loader: "html-loader"
      },
      { // Local image loader
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // Webdev source
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  }
};


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // app mode, prod, dev, stage
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
    ptm: path.resolve(__dirname, "src/ptm/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js", // will take the name from entry obj's key
    clean: true, // will not create multiple bundle / ptm files if we make any change.,
    assetModuleFilename: "[name][ext]", // for images
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // adding image loaders
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html", // for templating, for adding the base html file contents
    }),
  ],
};

const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/UI_kit/colors_and_type/colors_and_type.pug',
  output: {
    filename: 'result.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        include: [
          path.resolve(__dirname, 'src/fonts'),
          path.resolve(__dirname, 'node_modules'),
        ],
        use: ['file-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 'MiniCssExtractPlugin.loader',
          { loader: 'style-loader', options: {sourceMap: true} },
          { loader: 'css-loader', options: {sourceMap: true} },
          { loader: 'sass-loader', options: {sourceMap: true} },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/UI_kit/colors_and_type/colors_and_type.pug',
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    // }),
  ],
};

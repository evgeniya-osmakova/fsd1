const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.pug',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'result.js',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
          'MiniCssExtractPlugin.loader',
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

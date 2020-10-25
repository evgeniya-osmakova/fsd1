const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: '/src/UI_kit/colors_and_type/colors_and_type.pug',
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
        exclude: [path.resolve(__dirname, 'src/fonts')],
        include: [
          path.resolve(__dirname, '/src/fonts/quicksand'),
          path.resolve(__dirname, 'node_modules'),
        ],
        use: ['file-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '/src/UI_kit/colors_and_type/colors_and_type.pug',
    }),
  ],
};

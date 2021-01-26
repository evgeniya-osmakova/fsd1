const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

function generateHtmlPlugins(templateDir) {
  const pathToPages = path.resolve(__dirname, templateDir);
  const templateFiles = fs.readdirSync(pathToPages);
  return templateFiles
    .map((item) => {
      if (item !== 'templates') {
        const pugFile = fs
          .readdirSync(path.resolve(pathToPages, item))
          .filter((file) => file.match(/.pug$/))[0];
        // const [name, extension] = pugFile.split(".");
        const parts = pugFile.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
          filename: `${name}.html`,
          template: path.resolve(
            __dirname,
            `${path.resolve(pathToPages, item)}/${name}.${extension}`,
          ),
        });
      }
    })
    .filter((item) => !!item);
}
const htmlPlugins = generateHtmlPlugins('./src/pages/uiKit');
const htmlPlugins2 = generateHtmlPlugins('./src/pages/website');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 8002,
    open: true,
    historyApiFallback: true,
    host: '0000',
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
    // filename: "main.js",
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: { pretty: true },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['styles-loader', 'css-loader'],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader', 'file-loader'],
      },
      {
        test: /\.(ttf|eot|svg|woff)$/,
        include: [path.resolve(__dirname, 'public/fonts')],
        exclude: [
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'src/images'),
          path.resolve(__dirname, 'src/pages'),
        ],
        use: ['file-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        exclude: [path.resolve(__dirname, 'public/fonts')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: (url, resourcePath, context) => `img/${url}`,
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: `${path.join(__dirname, './public')}/images`, to: 'img' },
      ],
    }),
    new CleanWebpackPlugin(),
    ...htmlPlugins,
    ...htmlPlugins2,
    // new HtmlWebpackPlugin({
    //   template: './src/pages/website/landing/landing.pug',
    //   minify: false,
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPugPlugin(),
  ],
};

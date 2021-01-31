const paths = require('./paths');
const path = require('path');
const dotenv = require('dotenv').config({ path: paths.dotenv });
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const aliases = {
  '@': '',
  '@UI': 'component/UI',
  '@component': 'component',
  '@context': 'context',
  '@hooks': 'hooks/index.js',
  '@utils': 'utils/index.js',
  '@api': 'api',
  '@page': 'page',
  '@variable': 'variable/index.js',
  S: 'lib/S/index.js',
  Former: 'lib/Former/index.js',
};
Object.keys(aliases).forEach((importName) => {
  const pathName = aliases[importName];

  const absolutePath = path.resolve(paths.appSrc, pathName);
  aliases[importName] = absolutePath;
});

const commonConfig = {
  entry: {
    index: paths.appIndexJs,
  },
  resolve: {
    extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`),
    alias: aliases,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
    new CleanWebpackPlugin(),
  ],
};
module.exports = commonConfig;

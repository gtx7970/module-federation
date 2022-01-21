const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const base = require('./webpack.common');
const pkgJson = require('../package.json');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './marketApp': './src/bootstrap.js',
      },
      shared: pkgJson.dependencies,
    }),
  ],
});

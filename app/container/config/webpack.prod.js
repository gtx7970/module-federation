const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const base = require('./webpack.common');
const pkgJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`
      },
      shared: pkgJson.dependencies
    })
  ]
})
const webpack = require('webpack');
const path = require('path');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const portfinder = require('portfinder');
const commandLineArgs = require('command-line-args')
const webpackDefinitions = [
  { name: 'profile', alias: 'p', type: String },
  { name: 'environment', alias: 'e', type: String },
  { name: 'verbose', alias: 'v', type: String },
]

module.exports = async function (env) {
  const webpackCommandArgs = commandLineArgs(webpackDefinitions, { stopAtFirstUnknown: true })
  var buildprofile = webpackCommandArgs.profile || process.env.npm_package_extbuild_defaultprofile
  var buildenvironment = webpackCommandArgs.environment || process.env.npm_package_extbuild_defaultenvironment
  var buildverbose = webpackCommandArgs.verbose || process.env.npm_package_extbuild_buildverbose

  if (buildprofile == 'all') {
    buildprofile = ''
  }

  portfinder.basePort = 1962
  var port = await portfinder.getPortPromise()
  const nodeEnv = env && env.prod ? 'production' : 'development'
  const isProd = nodeEnv === 'production'

  return {
    plugins: [
      new ExtWebpackPlugin({profile: buildprofile, environment: buildenvironment, verbose: buildverbose}),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/
        }
      ]
    },
    mode: 'development',
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    context: path.join(__dirname, './'),
    entry: {
      'app': [
        'react-hot-loader/patch',
        './app.js'
      ]
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: '[name].js'
    },
    devServer: {
      contentBase: './',
      historyApiFallback: true,
      host: '127.0.0.1',
      port,
      disableHostCheck: false,
      compress: isProd,
      inline: !isProd,
      hot: false,
      stats: {
        entrypoints: false,
        assets: false,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: false,
        version: false,
        warnings: false,
        colors: {
          green: '[32m'
        }
      }
    }
  }
};
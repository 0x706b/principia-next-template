import type { Configuration } from 'webpack'

import * as path from 'path'
import WebpackNodeExternals from 'webpack-node-externals'

const isProd = process.env.ENV === 'prod'

const server: Configuration = {
  mode: isProd ? 'production' : 'development',
  context: __dirname,
  ...(isProd ? {} : { devtool: 'inline-source-map' }),
  entry: {
    server: { import: './server' },
  },
  target: 'node',
  externalsPresets: { node: true },
  externals: [
    WebpackNodeExternals(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['ignore-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  experiments: {
    topLevelAwait: true,
  },
}

export default server

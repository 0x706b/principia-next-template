/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const {dir, defaultLoaders} = options
    config.module.rules.push({
      test: /\.tsx?$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'ts-loader'
        }
      ]
    })
    return config
  }
}

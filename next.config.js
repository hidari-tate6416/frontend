require('dotenv').config({ path: `./env/.env.${process.env.ENVIRONMENT}` })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  },
}

module.exports = nextConfig

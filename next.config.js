/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    env: process.env.ENV,
  }
}

module.exports = nextConfig

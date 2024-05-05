const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  output: 'standalone'
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   disable: !isProd
// })

// module.exports = withPWA(nextConfig)
export default nextConfig

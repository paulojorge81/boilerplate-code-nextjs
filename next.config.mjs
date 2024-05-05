const isProd = process.env.NODE_ENV === 'production'

import withPWA from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  output: 'standalone'
}

const withNextPWA = withPWA({
  dest: 'public',
  disable: !isProd
})

export default withNextPWA(nextConfig)

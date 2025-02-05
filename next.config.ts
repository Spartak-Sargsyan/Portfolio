/** @format */

import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@styles': path.resolve(__dirname, 'src/app/styles/global'),
        }
        return config
    },
}

export default nextConfig

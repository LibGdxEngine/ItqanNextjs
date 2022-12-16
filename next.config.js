const webpack = require("webpack")
const nextConfig = {
    env: {
        NEXT_PUBLIC_SECRET: '01cb3b57b8a334e3e5c0002ff2ad1057',
        SECRET: '01cb3b57b8a334e3e5c0002ff2ad1057'
    },
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            })
        );
        return config;
    },
    swcMinify: true,
};

module.exports = nextConfig;
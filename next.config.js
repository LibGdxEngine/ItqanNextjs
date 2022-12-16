const webpack = require("webpack")
const nextConfig = {
    env: {
        NEXT_PUBLIC_SECRET: 'بسم_الله_الرحمن_الرحيم',
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
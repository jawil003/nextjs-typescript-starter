const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const {
  TsConfigPathsPlugin,
} = require("awesome-typescript-loader");
const debug = process.env.NODE_ENV !== "production";

const nextConfig = withOffline({
  workboxOpts: {},
  webpack: (config) => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }
    config.resolve.plugins.push(
      new TsConfigPathsPlugin()
    );

    return config;
  },
});
// next.config.js
module.exports = withPlugins([], nextConfig);

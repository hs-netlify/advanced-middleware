module.exports = {
  webpack: (config, options) => {
    if (!options.dev) {
      config.devtool = options.isServer ? false : false;
    }
    return config;
  },
};

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.txt$/,
      loader: "raw-loader",
    });
    return config;
  },
};

// next.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, "src/assets"),
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

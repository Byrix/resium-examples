const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  webpack: (config: { plugins: any[]; }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('cesium'),
      }),
    );
    return config;
  }
}
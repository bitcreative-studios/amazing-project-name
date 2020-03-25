const path = require("path")
module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /.css$/,
      loaders: [
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            config: {
              path: "./.storybook",
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../stories"),
    })
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    })
    return config
  },
}

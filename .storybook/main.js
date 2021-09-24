module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-viewport"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.pug$/,
      use: ["pug-plain-loader"]
    })

    config.module.rules.push({
      test: /\.styl(us)?$/,
      use: ["vue-style-loader", "css-loader", "stylus-loader"]
    })

    config.module.rules.push({
      test: /\.(ts(x)?|vue|js(x)?)$/,
      // use: ['eslint-loader']
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre'
    })
    
    return config
  }
}
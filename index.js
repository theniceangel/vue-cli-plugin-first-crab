module.exports = (api, options) => {
  // alias
  const resolve = (path) => api.resolve(path)
  api.chainWebpack(webpackConfig => {
    config.resolve.webpackConfig
      .set('api', resolve('./src/api'))
      .set('common', resolve('./src/common'))
      .set('components', resolve('./src/components'))
      .set('plugins', resolve('./src/plugins'))
      .set('views', resolve('./src/views'))
  })
}

module.exports = api => {
  // vue-router & vuex
  api.extendPackage({
    dependencies: {
      'vue-router': '^3.2.0',
      vuex: '^3.4.0'
    }
  })
  api.render('./template')
}
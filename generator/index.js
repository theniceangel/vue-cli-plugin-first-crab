module.exports = api => {
  // vue-router & vuex
  api.extendPackage({
    dependencies: {
      'vue-router': '^3.2.0',
      vuex: '^3.4.0'
    }
  })

  // axios
  api.extendPackage({
    dependencies: {
      axios: '^0.24.0'
    }
  })

  // utils
  api.extendPackage({
    dependencies: {
      'lodash-es': '^4.17.21',
      'js-cookie': '^2.2.1'
    }
  })

  // EJS
  api.render('./template', {
    title: api.rootOptions.projectName
  })
}
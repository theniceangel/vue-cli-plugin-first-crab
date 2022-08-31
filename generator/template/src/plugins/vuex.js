import VueX from 'vuex'

export default (Ctor) => {
  Ctor.use(VueX)
}

export const store = new VueX.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

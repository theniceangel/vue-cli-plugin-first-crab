
import installVueRouter from './router'
import installVueX from './vuex'

export const installPlugins = (Ctor) => {
  installVueRouter(Ctor)
  installVueX(Ctor)
}

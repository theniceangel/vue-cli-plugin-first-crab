import VueRouter from 'vue-router'
import Home from 'views/Home.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

export default (Ctor) => {
  Ctor.use(VueRouter)
}

export {
  router
}

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import AllProducts from './components/AllProducts'
import ProductDetail from './components/ProductDetail'
import CreateProduct from './components/CreateProduct'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: AllProducts, meta: { title: 'Products Page' }, },
  { path: '/detail/:productId', component: ProductDetail, meta: { title: 'Product Detail Page' }, },
  { path: '/create', component: CreateProduct, meta: { title: 'Create New Product Page' }, },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

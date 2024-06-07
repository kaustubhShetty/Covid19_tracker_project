// import Vue from 'vue'
// import App from './App.vue'
// import Home from './components/Home'
// import VueRouter from 'vue-router'
// import About from './components/About.vue'
// import './assets/tailwind.css';
// import store from './store'
// export const bus = new Vue();  //Event Bus instance

// //Vue.use(Chartkick.use(Chart))

// Vue.use(VueRouter);

// const routes = [
//   {path:'/', component: Home},
//   {path: '/about', component: About}
// ]

// const router = new VueRouter({
//   routes,
//   mode:'history'

// })


// Vue.config.productionTip = false


// new Vue({
//   router,
//   store,
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
// import About from './components/About.vue'
// import Home from './components/Home.vue'
import './assets/tailwind.css';  // Correct import path for tailwind.css
import store from './store'
export const bus = new Vue();  // Event Bus instance

// Vue.use(VueRouter);

// const routes = [
//   { path: '/', component: Home },  // Use Home component for the home route
//   { path: '/about', component: About }
// ]

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })
import router from './router';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

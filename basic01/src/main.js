// import modules
import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import routingJS from './router'
import vueAnimate from 'animate.css';

// use modules
Vue.use(vueRouter)
Vue.use(vueResource)
Vue.use(vueAnimate);

// instance module router
const routerVar = new vueRouter({
  routes: routingJS,
  mode: 'history'
})

// custom filters global register
Vue.filter('uppercase', value => value.toUpperCase())

// custom  directives global register
Vue.directive('randomColor', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
})

// render to app
new Vue({
  el: '#app',
  render: h => h(App),
  router: routerVar
})

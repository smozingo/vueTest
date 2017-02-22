import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Message from './Message.vue';
import Users from './Users.vue';
import Home from './Home.vue';

Vue.use(VueRouter);
Vue.component('app-message', Message);

const routes = [
  { path: '/users', component: Users },
  { path: '/', component: Home },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

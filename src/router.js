import Vue from 'vue';
import VueRouter from 'vue-router';
import InlineEditor from './components/InlineEditor';
import OrderForm from './components/OrderForm';
import InstantSearch from './components/InstantSearch';
import SwitchableGrid from './components/SwitchableGrid';
import NotFound from './components/NotFound';

Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/inline-editor'},
  {path: '/inline-editor', component: InlineEditor},
  {path: '/order-form', component: OrderForm},
  {path: '/instant-search', component: InstantSearch},
  {path: '/switchable-grid', component: SwitchableGrid},
  {path: '*', component: NotFound}
]

export default new VueRouter({
  routes
})

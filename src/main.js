import DefaultLayout from '~/layouts/Default.vue';
import Vuex from 'vuex';
import store from './store/index';
import '~/styles/blog.scss';
import '~/styles/themes.scss';

export default function (Vue, { appOptions }) {
  Vue.component('Layout', DefaultLayout);

  Vue.use(Vuex);
  appOptions.store = store;
}

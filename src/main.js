import DefaultLayout from '~/layouts/Default.vue';

// state management
import Vuex from 'vuex';
import store from './store/index';

import VueScrollTo from 'vue-scrollto';

//styles
import '~/styles/blog.scss';
import '~/styles/themes.scss';

export default function (Vue, { appOptions }) {
  Vue.component('Layout', DefaultLayout);

  Vue.use(Vuex);
  appOptions.store = store;

  // Vue.use(VueScrollTo, {
  //   offset: -130,
  // });

  Vue.use(VueScrollTo);
}

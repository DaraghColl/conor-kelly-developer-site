import DefaultLayout from '~/layouts/Default.vue';

// state management
import Vuex from 'vuex';
import store from './store/index';

import VueScrollTo from 'vue-scrollto';

//styles
import '~/styles/blog.scss';
import '~/styles/themes.scss';

export default function (Vue, { appOptions, head }) {
  Vue.component('Layout', DefaultLayout);

  Vue.use(Vuex);
  appOptions.store = store;

  Vue.use(VueScrollTo);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
  });
}

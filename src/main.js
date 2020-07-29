import DefaultLayout from '~/layouts/Default.vue';
import '~/styles/blog.scss';
import '~/styles/themes.scss';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}

/**
 * Vue3 Main script
 */

// Load vue core
import { createApp } from 'vue';

// Load Vuetify
import vuetify from './plugins/vuetify';

// Load Layout vue.
import App from './App.vue';

/** Register Vue */
const vue = createApp(App);
vue.use(vuetify);
vue.mount('#app');


import { createApp } from 'vue';
import App from './vue/App.vue';
import router from './rooter';
import './index.css';

createApp(App).use(router).mount('#app');

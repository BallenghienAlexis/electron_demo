import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../vue/home.vue'
import Contact from '../vue/contact.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/contact', name: 'contact', component: Contact },
];

const router = createRouter({
    history: createWebHashHistory(), // important pour Electron (pas d'historique HTML5)
    routes
});

export default router;
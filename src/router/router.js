import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import SingleProduct from '../components/SingleProduct.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: SingleProduct, name: 'product' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
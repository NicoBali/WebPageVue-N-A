import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ServicesPage from '@/views/ServicesPage.vue';
import CompanyPage from '@/views/CompanyPage.vue';
import BlogPage from '@/views/BlogPage.vue';

const routes = [
  { path: '/homepage', component: HomePage },
  { path: '/servicesandprincing', component: ServicesPage},
  { path: '/company', component: CompanyPage},
  { path: '/blog', component: BlogPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

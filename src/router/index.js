import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ServicesPage from '@/views/ServicesPage.vue';
import CompanyPage from '@/views/CompanyPage.vue';
import BlogPage from '@/views/BlogPage.vue';
import TalentPage from '@/views/TalentPage.vue';
import InicioSesionPage from '@/views/InicioSesionPage.vue';
import PortalPage from '@/views/PortalPage.vue';
import RegistroPage from '@/views/RegistroPage.vue';

const routes = [
  { path: '/homepage', component: HomePage },
  { path: '/servicesandprincing', component: ServicesPage},
  { path: '/company', component: CompanyPage},
  { path: '/blog', component: BlogPage },
  {path: '/talent', component: TalentPage},
  {path: '/login', component: InicioSesionPage},
  {path: '/portal', component: PortalPage},
  {path: '/register', component: RegistroPage}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

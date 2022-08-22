import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Profile from '@/views/Profile';
import Note from '@/views/Note';
import EditNote from '@/views/EditNote';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {requiresAuth: true},
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {requiresAuth: true},
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: Note,
    meta: {requiresAuth: true},
    props: true,
  },
  {
    path: '/note/:id',
    name: 'EditNote',
    component: EditNote,
    meta: {requiresAuth: true},
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router

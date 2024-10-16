import { createRouter, createWebHistory } from 'vue-router';
import MemoList from '../components/view/MemoList.vue';
import MemoDetail from '../components/view/MemoDetail.vue';

const routes = [
  {
    path: '/',
    name: 'MemoList',
    component: MemoList,
  },
  {
    path: '/memo/:id',
    name: 'MemoDetail',
    component: MemoDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/fixedList', component: '@/pages/fixedList/index.tsx' },
  ],
  fastRefresh: {},
});

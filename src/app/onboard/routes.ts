import { RouteConfig } from 'vue-router/types/router';

export const OnboardRoutes: RouteConfig[] = [
  {
    path:      '/onboard',
    component: () => import(/* webpackChunkName: "onboard" */ './Onboard/Onboard.vue').then(m => m.default),
  },
];

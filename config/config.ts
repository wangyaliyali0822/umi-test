import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  headScripts: [
    `//api.map.baidu.com/api?type=webgl&v=1.0&ak=VrqieCS1j4tKTUGncYbI07k0tfp7Zpen`,
  ],
  routes,
  theme: {
    '@primary-color': '#1890ff',
  },
  title: '哈哈title',
  proxy: {
    '/api': {
      target: 'https://care.otodo.cn',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});

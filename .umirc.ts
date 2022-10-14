import { defineConfig } from 'umi';
import routes from './routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{},
  routes:routes,
  fastRefresh: {},
  headScripts: [
    `//api.map.baidu.com/api?type=webgl&v=1.0&ak=VrqieCS1j4tKTUGncYbI07k0tfp7Zpen`,
  ],
});
 
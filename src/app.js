// 运行时配置（运行在浏览器端）
import { history } from 'umi';

// 动态修改渲染根节点

// 修改路由
// export function patchRoutes({ routes }) {
//     routes.unshift({
//       path: '/foo',
//       exact: true,
//       component: require('@/extraRoutes/foo').default,
//     });
// }

// 和render配置配合使用，请求服务端根据响应动态更新路由；
// let extraRoutes;

// export function patchRoutes({ routes }) {
//   merge(routes, extraRoutes);
// }

// export function render(oldRender) {
//   fetch('/api/routes').then(res=>res.json()).then((res) => {
//     extraRoutes = res.routes;
//     oldRender();
//   })
// }

// 覆盖render：比如用于渲染之前做权限校验
// export function render(oldRender) {
//     fetch('/api/auth').then(auth => {
//       if (auth.isLogin) { oldRender() }
//       else {
//         history.push('/login');
//         oldRender()
//       }
//     });
//   }

// onRouteChange({ routes, matchedRoutes, location, action })
// 在初始加载和路由切换时做一些事情：比如用于做埋点统计
// 设置标题
//   export function onRouteChange({ matchedRoutes }) {
//     if (matchedRoutes.length) {
//         console.log(matchedRoutes[matchedRoutes.length-1]);
//       document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
//     }
//   }

// main.js是整个项目的入口文件

/**
 *
 * import Vue from 'vue' 默认引入非完整版,无模板解析器,例如 template:"<App></App>"等无法解析,需要render函数来创建元素,.vue文件中的template模板由脚手架解析
 * 原因,完成vue文件中,模板解析器占很大一部分,精简版打包时少占用一些空间,但重点原因是模板解析器是开发时需要不适合放到生产环境上,打包适合webpack会解析vue文件
 *
 */
/**
import Vue from 'vue/dist/vue'
new Vue({
  el:"#app",
  template:"<App></App>",
  components:{
    App
  }
})
 */

/**
 * 全局注册mixin
import { hunhe,hunhe2 } from './mixin'
Vue.mixins(hunhe);
Vue.mixins(hunhe2);
*/


// 引入vue
import Vue from 'vue'
// 引入App组件，App组件是所有组件的父组件
import App from './App.vue'
// 引入插件
import plugins from './plugins'
// 引入vuerouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// // 引入ElementUI完整组件库
// import ElementUI from 'element-ui';
// // 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 安需引入ElementUI
import { Row,Button, DatePicker } from 'element-ui';
// name为使用标签可以自定义
Vue.component('zys-button', Button);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Row.name, Row);

//应用插件
Vue.use(plugins)
Vue.use(VueRouter)
// Vue.use(ElementUI)


// 关闭生产提示
Vue.config.productionTip = false

// 创建vue实例对象vm
new Vue({
  el:'#app',
  // 把app放到容器中
  render: h => h(App),
  router: router,
  beforeCreate() {
    //配置全局事件总线实现同级组件间的通信
    Vue.prototype.$bus = this
  }
})

/*
// 创建vue实例对象vm
new Vue({
  // 把app放到容器中
  render: h => h(App),
}).$mount('#app')*/



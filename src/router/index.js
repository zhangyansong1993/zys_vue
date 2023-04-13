// 引入vuerouter
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Details from '../pages/Details'


// 创建并暴露路由
const router = new VueRouter({
    mode:"hash",//路由两种工作模式hash和history，默认hash，地址栏带#号，#和#后面的路径都不会带给后台服务器，history地址栏不带#请求会把前端路由地址带给后台
    routes: [
        {
            path: '/about',
            component: About,
            meta: { isAuth: true,title:"关于" },

            //独享前置路由守卫
            // beforeEnter:(to, from, next)=>{  // 可给某个路由单独配置,没有独享后置路由守卫,可配合全局后置路由守卫使用
            //     if (to.meta.isAuth) {//判断是否需要校验
            //         if (localStorage.getItem('school') === 'zys') {//浏览器缓存中取用户名
            //             next()
            //         } else {
            //             alert("无权访问")
            //         }
            //     } else {
            //         next()
            //     }   
            // }
        },
        {
            path: '/home',
            component: Home,
            meta: { title:"主页" },
            children: [ //多级路由，嵌套路由
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'messagexiangqing', //name属性可以简化路径写法，只能用to的对象方式使用
                            path: 'details',
                            component: Details,
                            props($route) { //props函数式给路由传参
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            name: 'newsxiangqing',
                            path: 'details/:id/:title', //:路径title 占位符，用于路由params传参
                            component: Details,
                            props: true //把该路由组件收到的所有 params 参数，以props形式转递给details组件
                        }
                    ]
                }
            ]
        }
    ]
})
// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {//判断是否需要校验
        if (localStorage.getItem('school') === 'zys') {//浏览器缓存中取用户名
            next()
        } else {
            alert("无权访问")
        }
    } else {
        next()
    }
})
// 全局后置路由守卫
router.afterEach((to) => {
    // 可以在路由完成后切换网站title,需要在路由中配置meta{} 属性
    document.title = to.meta.title || 'zys'
})

export default router
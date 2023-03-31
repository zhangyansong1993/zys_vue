// 插件
export default {
    // 第一个参数为new vue的函数，可以接收多个参数
    install(Vue){
         //自定义指令 自动获取焦点
        Vue.directive('fBind', {
            bind(element, binding) { 
                element.value = binding.value
            },
            inserted(element) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            }
        })

        //混合
        Vue.mixin({

        })

        // 过滤器...
    }
}
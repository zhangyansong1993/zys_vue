<template>
    <div>
        <span style="font-weight:bold">home</span><br/>

        <router-link style="margin-right:15px;" to="/home/message">message</router-link>
        <router-link to="/home/news">news</router-link>

        <div>
            <!-- keep-alive 让不展示的组件保持挂载不被销毁,include 指定组件名字,不指定所有组件都不会被销毁
                组件中如果有输入框,切走后组件被销毁,切回来后输入框的数据都会消失因为组件切走时组件被销毁了,包裹keep-alive可让指定组件保持挂载不被销毁
                指定多个 :include="['News']"
            -->
            <keep-alive include="RouterNews">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RouterHome',

    // 通过路由规则,进入该组件前被调用
    beforeRouteEnter(to,from,next){
        // 也可在村做路由权限校验
        next()
    },
    // 通过路由规则,离开该组件前被调用
    beforRouteLeave(to,from,next){
        next()
    }
}
</script>

<style></style>
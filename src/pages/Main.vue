<template>
    <!-- 
        1.路由组件通常放在pages文件夹，一般组件通常放在componentes文件夹
        2.路由组件不会被初始化，页面点击切入时挂载，切出后销毁
        3.每个组件都有自己的route属性
        4.整个应用只有一个router
        5.路由切换并传参请看Message.vue
     -->
    <div class="main">
        <button @click="back">后退</button>
        <span style="font-weight:bold">路由&嵌套路由</span>
        <button @click="forward">前进</button>

        <!-- <button @click="go">跳转</button> -->
        <div>
            <!-- router-link 展示需要路由切换的组件 
                replace:浏览器历史两种工作模式push追加和replace替换，开启replace模式 当前组件不保留历史
            -->
            <router-link replace style="margin-right:15px;" to="/home" active-class="active">home</router-link>
            <router-link replace to="/about" active-class="active">about</router-link>
        </div>
        <div>
            <!-- 路由页面展示区 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>


export default {
    name: 'MyRouter',
    methods:{
        back(){
            this.$router.back()
        },
        forward(){
            this.$router.forward()
        },
        go(){
            // 指定跳转到哪一步，复数后退 整数前进
            this.$router.go(2)
        }
    }
}
</script> 

<style scoped>
.main{    
    padding: 10px;
    height: 200px;
    width: 200px;
    border: 3px solid;
    border-color: red;
    text-align: center;
    margin-bottom: 10px;
    margin-right: 10px;
    float: left;
}

</style>
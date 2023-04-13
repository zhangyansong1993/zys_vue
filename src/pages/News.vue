<template>
    <div>
        <span style="font-weight:bold">news</span><br />
        <li v-for="a in arr" :key="a.id">
            <!-- 路由params传参，to的字符串写法 -->
            <router-link :to="`/home/news/details/${a.id}/${a.title}`">{{a.title}}</router-link>

            <!-- 路由params传参，to的对象写法 -->
            <!-- <router-link :to="{
                    name: 'newsxiangqing', //使用params传参只能使用name属性配置路由路径
                    params:{
                    id:a.id,
                    title:a.title
                        }
                    }">
                    {{a.title}}
                </router-link> -->
        </li>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'RouterNews',
    data() {
        return {
            arr: [
                {
                    id: 1,
                    title: 'news01'
                },
                {
                    id: 2,
                    title: 'news02'
                }
            ]
        }
    },

    // 仅在组件被<keep-alive>包裹时生效,被<keep-alive>包裹时,切走组件不会被销毁,对于定时器,可以在组件被切走的时候停止,切入时开启
    activated(){
        console.log('News组件被激活了');
    },
    deactivated(){
        console.log("News组件失活了");
    }
}
</script>

<style></style>
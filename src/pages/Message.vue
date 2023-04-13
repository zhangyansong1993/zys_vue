<template>
  <div>
    <span style="font-weight:bold">message</span><br />
    <li v-for="a in arr" :key="a.id">
      <!-- 路由query传参，to的字符串写法 -->
      <!-- <router-link :to="`/home/message/details?id=${a.id}`">消息01</router-link> -->

      <!-- 路由query传参，to的对象写法 * -->
      <router-link :to="{
        // path:'/home/message/details',
        name: 'messagexiangqing', //在路由中配置name属性可以简化路径写法，只适用于to的对象写法
        query: {
          id: a.id,
          title: a.title
        }
      }">
        {{ a.title }}
      </router-link><br />
      <!--  replace:浏览器历史两种工作模式push追加和replace替换，开启replace模式 当前组件不保留历史 -->
      <button @click="pushShow(a)">push查看</button>
      <button @click="replaceShow(a)">replace查看</button>
    </li>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'RouterMessage',
  data() {
    return {
      arr: [
        {
          id: 1,
          title: '消息01'
        },
        {
          id: 2,
          title: '消息02'
        }
      ]
    }
  },
  methods: {
    pushShow(a) {
      this.$router.push({
        name: 'messagexiangqing',
        query: {
          id: a.id,
          title: a.title
        }
      })
    },
    replaceShow(a) {
      this.$router.replace({
        name: 'messagexiangqing',
        query: {
          id: a.id,
          title: a.title
        }
      })
    }
  },
  // 仅在组件被<keep-alive>包裹是生效
  activated() {
    console.log('Message组件被激活了');
  },
  deactivated() {
    console.log("Message组件失活了");
  }
}
</script>

<style></style>
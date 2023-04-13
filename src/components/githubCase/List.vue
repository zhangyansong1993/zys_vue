<template>
  <div class="list">
    <div v-for="u in user.users" :key="u.login">
      <div>
        <a :href="u.html_url">
          <img :src="u.avatar_url">
        </a>
        <span>{{ u.login }}</span>
      </div>
    </div>
    <h4 v-show="user.isFirst">欢迎使用(github搜索案例)</h4>
    <h4 v-show="user.isLoaning">加载中...</h4>
    <h4 v-show="user.errMsg">{{user.errMsg}}</h4>
  </div>
</template>

<script>

export default {
  name: 'CaseList',
  data() {
    return {
      user:{
        isFirst: true,
        isLoaning: false,
        errMsg: '',
        users: []
      }
    }
  },
  methods: {
    getUser(dataObj) {
      //js6语法，合并和替相同属性值
      this.user = {...this.user,...dataObj};
    }
  },
  mounted() {
    //组件实例挂载完毕后绑定getUser自定义事件
    this.$bus.$on('updateUserList', this.getUser)

  }
}
</script>

<style scoped>
.list {
  padding: 5px;
  background: pink;
  height: 60%;
  width: 90%;
  border: 1px solid;
  border-color: red;
  text-align: center;
  margin-right: 10px;
  float: left;
}

img {
  width: 50%;
  height: 50%;
}
</style>

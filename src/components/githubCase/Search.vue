<template>
  <div class="search">
    <input v-model="keyWord" type="text">
    <button @click="search">搜索</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CaseSearch',
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    search() {
      this.$bus.$emit('updateUserList',{
        isFirst:false,
        isLoaning: true,
        errMsg: '',
        users: []
      });

      //暴露在公网的api一般后台处理了跨域问题
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            console.log(response.data.items)
            //触发getUsers并发送数据
            this.$bus.$emit('updateUserList',{
              isLoaning: false,
              users: response.data.items
            });
          },
          error => {
            this.$bus.$emit('updateUserList',{
              isLoaning: false,
              errMsg: error.message,
              users: []
            });
          }
      )
    }
  }
}
</script>

<style scoped>
.search {
  padding: 5px;
  background: skyblue;
  height: 20%;
  width: 90%;
  border: 1px solid;
  border-color: red;
  text-align: center;
  margin-bottom: 10px;
  margin-right: 10px;
  float: left;
}
</style>

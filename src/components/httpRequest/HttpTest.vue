<template>
  <div class="http">
    <h4>vue-cli解决http请求跨域</h4>
    <button @click="sendHttp">点击发送http请求</button>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "HttpTest",
  methods: {
    sendHttp() {
      //前端请求和后端服务不在同一服务器上会产生跨域问题（浏览器同源策略），解决方式有两种，一种使用代理服务器，二种后端处理（springboot可以通过注解方式指定请求地址处理跨域）
      //在vue.config.js文件中配置vue的代理服务器解决跨域问题；也可通过nginx反向代理服务器解决跨域，服务器之间通信不存在跨域问题
      axios.get("http://localhost:8080/api/getInfo").then(
          response => {
            console.log('data@@' + response.data)
          },
          error => {
            console.log('error@@' + error.message)
          }
      )
    }
  }
}
</script>

<style scoped>
.http {
  padding: 10px;
  background: skyblue;
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

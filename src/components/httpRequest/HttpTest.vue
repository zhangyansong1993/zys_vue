<template>
  <div class="http">
    <h4>vue-cli解决http请求跨域</h4>
    <button @click="sendHttp">点击发送http请求</button>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name:"HttpTest",
    methods:{
      sendHttp(){
        axios.get("http://localhost:8080/api/getInfo").then(
            response =>{
              console.log('data@@'+response.data)
            },
            error =>{
              console.log('error@@'+error.message)
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

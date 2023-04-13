<template>
  <div class="student">
    <h3>消息订阅与发布-发送方</h3>
    <h4>姓名：{{ studentName }}</h4>
    <h4>年龄：{{ age }}</h4>
    <button @click="sendStudentName">把名字传给兄弟组件</button>
  </div>
</template>

<script>
//使用pubsub-js 第三方库 实现消息订阅与发布
import pubsub from 'pubsub-js'

export default {
  name: "StudentVue",
  data() {
    return {
      studentName: "张三",
      age: 666,
    };
  },

  methods:{
    sendStudentName(){
      //publish 消费发布到hello
      pubsub.publish("hello",this.studentName)
    }
  }

};
</script>

<style scoped>
.student {
  padding: 5px;
  background: pink;
  height: 90%;
  width: 45%;
  border: 3px solid;
  border-color: red;
  text-align: center;

  float: left;
}
</style>

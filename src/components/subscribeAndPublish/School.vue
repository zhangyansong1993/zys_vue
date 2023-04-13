<template>
  <div class="school">
    <h3>消息订阅与发布-接收方</h3>
    <h4>学校：{{ schoolName }}</h4>
    <h4>地址：{{ addr }}</h4>
    <h4>学生：{{studentName}}</h4>
  </div>
</template>

<script>
//使用pubsub-js 第三方库 实现消息订阅与发布
import pubsub from 'pubsub-js'

export default {
  name: "SchoolVue",
  data() {
    return {
      schoolName: "家里蹲",
      addr: "地球村",
      studentName:""
    };
  },

  methods: {
    //第一个参数为自定义消息的名字hello
    dome(msg,data) {
      this.studentName = data
      console.log("school收到student的name:"+data)
    }
  },
  mounted() {
    //subscribe订阅一个消息,会反回一个任务id,通过id关闭订阅
    this.pubId = pubsub.subscribe('hello', this.dome);

    //因为使用第三方库，普通函数this不会指向组件实例，需要写成箭头函数this才是组件实例，箭头函数this会找上一级
    this.pubId = pubsub.subscribe('hello', (msg,data)=>{
      console.log("school收到student的name:"+data,this)
    });
  },

  beforeDestroy() {
    //组件销毁前取消订阅
    pubsub.unsubscribe(this.pubId);
  }
};
</script>

<style scoped>
.school {
  padding: 5px;
  background: pink;
  height: 90%;
  width: 45%;
  border: 3px solid;
  border-color: red;
  text-align: center;
  margin-right: 10px;
  float: left;
}
</style>

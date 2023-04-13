<template>
  <div class="school">
    <h2>自定义事件</h2>
    <h4>学校：{{ schoolName }}</h4>
    <h4>地址：{{ addr }}</h4>
    <button @click="sendSchoolName">把名字给父组件</button>
    <button @click="sendSchoolNameBus">把名字给兄弟组件</button>
  </div>
</template>

<script>
export default {
  name: "SchoolVue",
  data() {
    return {
      schoolName: "家里蹲",
      addr: "地球村",
    };
  },
  //通过传递函数方式实现子组件给父组件传递数据
  props: ["getSchoolName"],

  methods: {
    sendSchoolName() {
      this.getSchoolName(this.schoolName);
    },

    //通过在main.js的vm中注册全局事件总线,实现同级(兄弟)组件之间的通信,触发自定义事件
    //数据发送方
    sendSchoolNameBus(){//定义一个函数绑定click事件
      //触发一个自定义事件并且发送数据
      this.$bus.$emit("testBus",this.schoolName);
    }
  },
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

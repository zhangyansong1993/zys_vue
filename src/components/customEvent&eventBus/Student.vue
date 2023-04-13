<template>
  <div class="student">
    <h2>自定义事件</h2>
    <h4>姓名：{{ studentName }}</h4>
    <h4>年龄：{{ age }}</h4>
    <button @click="sendStudentName">把名字给父组件</button>
    <button @click="unbind">解除绑定自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "StudentVue",
  data() {
    return {
      studentName: "张三",
      age: 666,
    };
  },
  methods: {
    //通过自定义事件实现子给父传递数据
    sendStudentName() {
      this.$emit('dome', this.studentName)
      // this.$emit('dome2')
    },
    unbind() { //组件实例销毁后自动解绑自定义事件
      // 解除自定义事件绑定
      this.$off('dome') //解除单个 自定义事件
      // this.$off(['dome','dome2']) //解除多个 自定义事件
      // this.$off() //解除全部 自定义事件
    },

    //通过在main.js的vm中注册全局事件总线,实现同级(兄弟)组件之间的通信,定义函数
    eventBus(name){
      console.log('student@@'+name)
    }
  },

  //通过在main.js的vm中注册全局事件总线,实现同级(兄弟)组件之间的通信,挂载完毕后绑定自定义事件
  //数据接收方
  mounted() {//挂载后生命周期钩子
    //在组件实例挂载完毕后,在事件总线$bus中绑定一个自定义事件,并指定接收数据的函数eventBus
    this.$bus.$on("testBus",this.eventBus);
  },
  //销毁前生命周期钩子
  beforeDestroy() {
    //在组件实例销毁前解除自定义事件,绑定在$bus总线中的自定义事件不会随着组件实例的销毁而解除帮绑定
    this.$bus.$off('testBus')
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

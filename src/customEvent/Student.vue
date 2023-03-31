<template>
  <div class="student">
    <h2>自定义事件</h2>
    <h4>姓名：{{ studenName }}</h4>
    <h4>年龄：{{ age }}</h4>
    <button @click="sendStudentName()">把名字给父组件</button>
  </div>
</template>

<script>
export default {
  name: "StudentVue",
  data() {
    return {
      studenName: "张三",
      age: 666,
    };
  },
  methods: {
    sendStudentName() {
        this.$emit('dome',this.studenName)
    },
  },
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
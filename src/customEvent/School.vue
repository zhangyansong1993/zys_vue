<template>
  <div class="school">
    <h2>自定义事件</h2>
    <h4>学校：{{ schoolName }}</h4>
    <h4>地址：{{ addr }}</h4>
    <button @click="sendSchoolName">把名字给父组件</button>
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
  props: ["getSchoolName"],

  methods: {
    sendSchoolName() {
      this.getSchoolName(this.schoolName);
    },
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
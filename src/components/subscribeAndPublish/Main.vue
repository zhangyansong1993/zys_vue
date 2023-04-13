<template>
  <div class="main">
    <title>消息订阅与发布</title>
    <SchoolVue/>
    <StudentVue/>
  </div>
</template>

<script>
import SchoolVue from "./School";
import StudentVue from "./Student";

export default {
  name: "SubscribeAndPublishMain",
  components: {
    SchoolVue,
    StudentVue,
  }
};
</script>

<style scoped>
.main {
  padding: 10px;
  height: 200px;
  width: 500px;
  border: 3px solid;
  border-color: red;
  margin-right: 10px;
  margin-bottom: 10px;
  float: left;
}
</style>

<template>
  <div class="main">
    <!-- <h2>自定义事件</h2> -->
    <!-- 通过props配置项实现子给父传递数据 -->
    <SchoolVue :getSchoolName="getSchoolName"/>
    <!-- 通过自定义事件实现子给父传递数据 -->
    <StudentVue @dome="getStudebtName"/>
  </div>
</template>

<script>
import SchoolVue from "./School";
import StudentVue from "./Student";

export default {
  name: "MainVue",
  components: {
    SchoolVue,
    StudentVue,
  },
  methods:{

    getSchoolName(name){
      console.log(name);
    },


    getStudebtName(name){
      console.log(name);
    }
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
  float: left;
}
</style>
<template>
  <div class="main">
    <title>自定义事件</title>
    <!-- 通过props配置项实现子给父传递数据(props配置项可以简单实现父给子传递数据(详PropsConf.vue),而实现子给父传递数据则需要父定义一个函数传递给子然后子调用次函数) -->
    <SchoolVue :getSchoolName="getSchoolName"/>
    <!-- 通过绑定自定义事件实现子给父传递数据-->
    <StudentVue @dome="getStudentName"/>

    <!--    给组件标签绑定原生点击时间需要加native修饰,组件默认绑定的是自定义事件;
            可以绑定多个自定义事件-->
    <!--    <StudentVue @dome="getStudebtName" @dome2="test" @click.native="show"/>-->
  </div>
</template>

<script>
import SchoolVue from "./School";
import StudentVue from "./Student";

export default {
  name: "CustomEventMain",
  components: {
    SchoolVue,
    StudentVue,
  },
  methods: {
    getSchoolName(name) {
      console.log('main@@@' + name);
    },

    getStudentName(name) {
      console.log('main@@@' + name);
    },


    /*    test() {
          console.log("绑定多个事件")
        },
        show() {
          console.log('给组件标签绑定原生点击时间需要加native修饰,组件默认绑定的是自定义事件')
        }*/

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

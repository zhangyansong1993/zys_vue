<template>
  <div class="size">
    <h4 ref="title"><span style="color:red">ref属性</span>用来替换id获取元素</h4>
    <button @click="showTitle">点击看控制台</button>
  </div>
</template>

<script>
export default {
name:'RefConf',
  methods: {
    showTitle() {
      console.log(this.$refs.title);
    },
  },
};
</script>

<style scoped>
    .size{
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
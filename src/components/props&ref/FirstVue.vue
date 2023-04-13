<template>
    <div class="size">
      <button @click="isShow = !isShow">显示/隐藏</button>
<!--      appear开启加载页面就开始动画 -->
      <transition name="hello" appear>
        <h4 v-show="isShow">{{name}}</h4>
      </transition>
    </div>

</template>

<script>
    export default{
        name:"FirstVue",
        data() {
            return {
                name:'动画效果',
                isShow:true
            }
        },
    }
</script>

<style scoped>
/* 样式标签上加上scoped 作用域，表示此样式只作用在当前组件中，防止类名一样 样式问题 */
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
    h4{
      background-color: aqua;
    }
    .hello-enter-active{
      animation: test 1s;
    }
    .hello-leave-active{
      animation: test 1s reverse;
    }
    @keyframes test {
      from{
        transform: translateX(-100%);
      }
      to{
        transform: translateX(0px);
      }
    }
</style>

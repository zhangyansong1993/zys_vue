<template>
    <div class="size">
        <h4>{{name}}</h4>
    </div>

</template>

<script>
    export default{
        name:"FirstVue",
        data() {
            return {
                name:'第一个Vue组件',
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
</style>
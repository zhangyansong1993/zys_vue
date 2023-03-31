<template>
  <div class="size">
    <span>姓名:{{name}}</span><br>
    <span>年龄:{{age+1}}</span><br>
    <span>性别:{{sex}}</span><br>
    <!-- v-fBind 是自定义指令，在plugins.js插件中配置 -->
    <input type="text" v-fBind:value="isname" />
    <h4><span style="color:red">props配置项</span>用来接收引用组件传来的数据</h4>
  </div>
</template>

<script>
export default {
    name:'PropsConf',
    data(){
        return {
            isname:'张三'
        }
    },

    // props的三种写法

    // props:['name','age','sex']

    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }
    // props中的属性先被解析
    props:{
        name:{
            type:String,
            require:true //必填
        },
        age:{
            type:Number,
            default:0 //默认值
        },
        sex:{
            type:String
        }
    }
}
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
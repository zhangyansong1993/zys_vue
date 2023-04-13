<template>
    <div class="main">
        <span style="font-weight: bold;">ElementUi</span>
        <!-- 在main.js文件中配置全部引入或者按需引入ElementUI -->
        <el-row>
            <zys-button>默认按钮</zys-button>
            <zys-button type="primary">主要按钮</zys-button>
            <el-date-picker v-model="date" type="date" placeholder="选择日期">
            </el-date-picker>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'ElementUI',
    data(){
        return{
            date:""
        }
    }
}
</script>

<style scoped>
.main {
    padding: 10px;
    height: 200px;
    width: 500px;
    border: 3px solid;
    border-color: red;
    text-align: center;
    margin-bottom: 10px;
    margin-right: 10px;
    float: left;
}
</style>
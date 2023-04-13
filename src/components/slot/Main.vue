<template>
  <div class="main">
    <!--
      lost插槽
      作用
        父组件可以向子组件插入html结构
      插槽分为
        1.默认插槽：双标签引用子组件，并插入其他标签，在被引用组件中使用<slot></slot>标签即可
        2.具名插槽：同上，多个使用name属性区分
        3.作用域插槽：数据在子组件身上，父组件来决定生成的html结构
    -->

    <!--  作用域插槽start  -->
    <CategorySlot>
      <template scope="arrStr">
        <ul>
          <li v-for="(str,index) in arrStr.str" :key="index">
            {{ str }}
          </li>
        </ul>
      </template>
    </CategorySlot>

    <CategorySlot>
      <template scope="arrStr">
        <ol>
          <li v-for="(str,index) in arrStr.str" :key="index">
            {{ str }}
          </li>
        </ol>
      </template>
    </CategorySlot>
    <!--  作用域插槽end  -->


<!--   <CategorySlot>
        <li>默认插槽</li>
      </CategorySlot>
-->

<!--
    <CategorySlot slot="dome">
      <li>具名插槽</li>
    </CategorySlot>

    <CategorySlot slot="dome2">
      <li>具名插槽</li>
    </CategorySlot>
 -->

  </div>
</template>
<script>
import CategorySlot from './Category'

export default {
  name: 'SlotMain',

  components: {
    CategorySlot
  }
}
</script>
<style scoped>
.main {
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

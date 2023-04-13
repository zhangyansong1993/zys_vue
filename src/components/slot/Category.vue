<template>
  <div>

    <!--    作用域插槽-->
    <slot :str="arrStr"></slot>


     <!--默认插槽-->
<!-- <slot></slot>-->


    <!--具名插槽-->
<!--
    <slot name="dome"></slot>
    <slot name="dome2"></slot>
-->

  </div>
</template>
<script>
export default {

  name: 'CategorySlot',
  data() {
    return {
      arrStr: ['slot插槽', '默认插槽', '具名插槽', '作用域插槽']
    }
  }
}
</script>
<style>

</style>

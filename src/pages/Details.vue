<template>
  <div>
      <li v-show="id">{{title}}</li>
  </div>
</template>

<script>
export default {
    name:'RouterDetails',
    props:['id','title']
}
</script>

<style>

</style>
<template>
  <div class="caseMain">
    <CaseSearch/>
    <CaseList/>
  </div>
</template>

<script>
import CaseList from './List';
import CaseSearch from './Search';

export default {
  name: 'CaseMain',
  data() {
    return {}
  },
  components: {
    CaseList,
    CaseSearch
  }
}
</script>

<style scoped>
.caseMain {
  padding: 10px;
  height: 200px;
  width: 200px;
  border: 3px solid;
  border-color: red;
  margin-right: 10px;
  margin-bottom: 10px;
  float: left;
}
</style>

<template>
  <div id="app">
    <ul>
      <!-- 遍历数据 -->
      <li v-for="(item,index) in array" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      array:['a','2','4','5g','h']
    }
  }
}
</script>

<style lang="scss">
li{
  height: 40px;
  line-height: 40px;
  list-style: none;
  border-bottom: 1px solid #ccc;
}
</style>

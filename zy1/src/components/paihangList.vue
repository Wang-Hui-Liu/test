<template>
   <ul>
       <li v-for="(item,index) in data" :key="index">
           {{item.title}}
       </li>
   </ul>
</template>

<script>
export default {
   props:['data']
}
</script>

<style scoped lang="scss">
   ul{
       li{
           padding-left: 10px;
           height: 40px;
           line-height: 40px;
           border-bottom: 1px solid #ccc;
       }
   }
</style>
<template>
  <div class="book">
     <div class="inner">
         <div class="con" v-if="list.length==0">还没有添加...</div>
         <List v-for="(item,index) in list" :key="index" :item="item">
           <template v-slot:last>
              <p class="hour">2小时前更新</p>
              <p class="detele" @click="detele(item)">删除</p>
           </template>
         </List>
     </div>
  </div>
</template>

<script>
import List from "@/components/list.vue";
import {mapState,mapMutations} from "vuex"
export default {
  components:{
    List
  },
   computed:{
     ...mapState(['list'])
   },
   methods:{
     ...mapMutations(['deteleList']),
     detele(item){
         this.deteleList(item)
     }
   }
}
</script>

<style scoped lang="scss">

</style>
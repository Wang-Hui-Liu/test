<template>
  <div class="paihang">
     <div class="item" v-for="(item,index) in list" :key="index" >
        <div class="title">
           <h3>
            {{item.type}}
         </h3>
        </div>
         <List :data='item.list_1' ></List>
     </div>
  </div>
</template>

<script>
import List from "@/components/paihangList.vue";

export default {
   data(){
     return {
       list:[]
     }
   },
   components:{
       List
   },
   created(){
     this.$http.get("/list/paihang").then(res=>{
      //  console.log(res.data.list)
       this.list=res.data.list
     })
   }
}
</script>

<style scoped lang="scss">
.paihang{
  flex:1;
  height: 100%;
  .item{
    width: 100%;
     .title{
       height: 40px;
       line-height: 40px;
       border-bottom: 1px solid #ccc;
       background: #eee;
       padding: 10px 0;
       h3{
         height: 20px;
         line-height: 20px;
         margin-left: 20px;
         border-left: 5px solid #999;
         padding-left: 10px;
       }
     }
  }
}
</style>
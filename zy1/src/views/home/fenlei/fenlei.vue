<template>
  <div class="fenlei">
     <div class="nav">
       <span v-for="(item,index) in navlist" :key="index" :class="current==index?'active':''" @click="changeIndex(index)">{{item}}</span>
     </div>
     <div class="main">
         <div class="inner">
           <List v-for="(item,index) in fenlist" :key="index" :item="item">
             <template v-slot:last>
                  <p>简介:{{item.description}}</p>
             </template>
           </List>
         </div>
     </div>
  </div>
</template>

<script>
import List from "@/components/list.vue"
export default {
  components:{
     List
  },
   data(){
     return {
       navlist:['热门','新书','免费','完本'],
       fenlist:[],
       current:0,
       allist:[]
     }
   },
   methods:{
      changeIndex(index){
         this.current=index;
         this.fenlist=this.allist['ranklist'+index]
      }
   },
   created(){
     this.$http.get("/list/data").then(res=>{
      //  console.log(res.data.list.ranklist0)
         this.allist=res.data.list
         this.fenlist=res.data.list.ranklist0
     })
   }
}
</script>

<style scoped lang="scss">
  .fenlei{
    flex:1;
    display: flex;
    flex-direction: column;
    .nav{
       height: 40px;
       line-height: 40px;
       padding: 5px 0;
       display: flex;
       margin-bottom: 10px;
       span{
         flex:1;
         display: block;
         margin: 0 10px;
         text-align: center;
         background: #eee;
         border-radius: 10px;
         line-height: 30px;
       }
       .active{
         background: rgb(245, 52, 100);
         color:#fff;
       }
    }
    .main{
      flex:1;
      height: 100%;
      overflow: hidden;
      .inner{
        height: 100%;
        overflow: auto;
      }
    }
  }
</style>
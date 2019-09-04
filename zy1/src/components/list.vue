<template>
      <div class="item" @click="gotoDetail(item,item.bookId)">
         <div class="imgs">
             <img src="../../src/assets/bg1.jpeg" alt="">
             <!-- <img :src="item.coverUrl" alt=""> -->
         </div>
         <div class="text">
             <h3>{{item.bookName}}</h3>
             <p>作者:{{item.authorName}}</p>
             <p>更新至:{{item.updteChapterName}}</p>
             <slot name="last"></slot>
         </div>
      </div>
</template>

<script>
export default {
  props:{
      item:Object
  },
  methods:{
      gotoDetail(item,bookId){
          this.$router.push({name:"detail",params:{id:bookId},query:item})
      }
  }
}
</script>

<style scoped lang="scss">
.item{
    display: flex;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.imgs{
    flex:1;
}
 img{
        width: 100%;
        height: 100%;
    }
.text{
    flex:2;
    padding-left: 10px;
    position: relative;
    p{
    width: 240px;
    height: 25px;
    line-height: 25px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
}
.add{
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border:1px solid red;
    color:red;
    border-radius: 10px;
    position: absolute;
    top:50%;
    right:10px;
    margin-top: 20px;
  }
  .hour{
      color:#999;
  }
  .detele{
     width: 70px;
     height: 30px;
     line-height: 30px;
     text-align: center;
     border:1px solid #999;
     color:#999;
     border-radius: 10px;
      position: absolute;
    top:50%;
    right:10px;
    margin-top: 20px;
  }
}

</style>
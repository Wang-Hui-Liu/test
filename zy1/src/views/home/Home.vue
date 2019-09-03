<template>
  <div class="home">
      <nav>
          <router-link
          :to="item.path"
          v-for="(item,index) in navlist"
          :key="index"
          tag="span"
          >
          {{item.name}}
          </router-link>
      </nav>
      <router-view></router-view>
  </div>
</template>


<script>

export default {
  data(){
    return {
      navlist:[
        {
          path:"/home/shouye",
          name:"首页"
        },{
          path:"/home/fenlei",
          name:"分类"
        },{
          path:"/home/paihang",
          name:"排行"
        },{
          path:"/home/bookpack",
          name:"书架"
        }
      ]
    }
  }
}

</script>

<style scoped lang="scss">
 .home{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;
 }
nav{
  height: 44px;
  line-height: 44px;
  display: flex;
  background: #333;
  color:#ccc;
}
nav span{
  flex:1;
  text-align: center;
}
 .router-link-active{
   background: #454545;
   color:#fff;
 }


</style>
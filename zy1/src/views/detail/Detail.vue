<template>
  <div class="detail">
      <List :item="$route.query">
        <template v-slot:last>
          <p>分类:{{list.categoryName}}</p>
          <p>字数:{{list.bookId}}</p>
          <p class="add" @click="gotoBook($route.query)">+书架</p>
        </template>
      </List>
  </div>
</template>

<script>
import List from "@/components/list";
import {mapState,mapMutations} from "vuex"
export default {
  components:{
    List
  },
  computed:{
     ...mapState(['list']),
  },
  methods:{
    ...mapMutations(['getList']),
    gotoBook(obj){
      //  console.log(this.list,this.$route.query)
       this.$router.push('/home/bookpack')
        this.getList(obj)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
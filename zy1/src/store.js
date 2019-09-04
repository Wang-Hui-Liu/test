import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 书架里的数据
    list:[]
  },
  mutations: {
    // 添加到书架
    getList(state,payLaod){
      state.list.push(payLaod);
    },
    // 删除书架里的书
    deteleList(state,payLaod){
      // console.log(payLaod)
      let data= state.list.filter((item,index)=>{
        // 如果list里的数据的id不等于点击的数据id，那么将这些数据返回，赋给data
         return item.bookId!==payLaod.bookId
       })
      state.list=data;
    }
  },
  actions: {

  }
})

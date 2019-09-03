import Vue from 'vue'
import Router from 'vue-router'
import shouye from "./views/home/shouye/shouye.vue"
import fenlei from "./views/home/fenlei/fenlei.vue"
import paihang from "./views/home/paihang/paihang.vue"



Vue.use(Router)

const router=new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      name:"home",
      component: ()=>import ("./views/home/Home.vue"),
      redirect:"/home/shouye",
      children:[
        {
          path:"shouye",
          name:"shouye",
          component: shouye,
          meta:{
            required:false,
            title:"首页",
            keepAlive:false
          }
        },
        {
          path:"fenlei",
          name:"fenlei",
          component: fenlei,
          meta:{
            required:false,
            title:"分类",
            keepAlive:true
          }
        },
        {
          path:"paihang",
          name:"paihang",
          component: paihang,
          meta:{
            required:false,
            title:"排行",
            keepAlive:false
          }
        },
        {
          path:"bookpack",
          name:"bookpack",
          component: ()=>import ("./views/home/bookpack/bookpack.vue"),
          meta:{
            required:true,
            title:"书架",
            keepAlive:false
          }
        }
      ]
    },
    {
      path:"/detail/:id",
      name:"detail",
      component: ()=>import ("./views/detail/Detail.vue"),
    },
    {
      path:"/login",
      name:"login",
      component: ()=>import ("./views/login/login.vue"),
    },
    {
      path:"*",
      redirect:"/home"
    }
  ]
})


router.beforeEach((to,from,next)=>{
  // console.log(to)
  if(to.matched.some(item=>item.meta.required)){
     const user=window.localStorage.userId;
     if(user){//如果登录了
       next()
     }else{//如果没有登录
       next({
         path:"/login",
         query:{redirect:to.fullPath}
       })
     }
  }else{
    next()
  }
})

router.afterEach((to,from)=>{
  // console.log(to.meta.title)
  if(to.meta && to.meta.title){
     document.title=to.meta.title;
  }else{
    document.title="小说"
  }
})

export default router;
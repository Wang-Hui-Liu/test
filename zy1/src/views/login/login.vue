<template>
    <div class="login-box">
        <div class="user block">
            <input type="text" placeholder="请输入账号" v-model="user">
        </div>
        <div class="pwd block">
            <input type="password" placeholder="请输入密码" v-model="pwd">
        </div>
        <div class="btn block">
            <input type="button" value="登录" @click="login" />
        </div>
    </div>
</template>

<script>
import "@/mock/index.js";

export default {
   data() {
       return {
           user:'',
           pwd:''
       }
   },
   created(){
      console.log(this.$route.query.redirect)
   },
   methods:{
       login(){
          this.$http.post("/list/login",{user:this.user,pwd:this.pwd}).then(res=>{
              if(res.data.code===1){
                  window.localStorage.userId=this.user;
                  let redirects=this.$route.query.redirect;
                  if(redirects){
                    this.$router.push({path:redirects})
                  }else{
                      this.$router.push("/home/shouye")
                  }
              }
          })
       }
   }
}
</script>

<style scoped lang="scss">
   .login-box{
       width: 100%;
       height: 100%;
   }
   .block{
       width: 100%;
       height: 30px;
       line-height: 30px;

       margin-bottom: 10px ;
       input{
           width: 100%;
           height: 100%;
           outline: none;
           border:none;
           border:1px solid #ccc;
           padding-left: 15px;
       }
   }
</style>
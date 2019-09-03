import Mock from "mockjs"
import banner from "./banner.json";
import paihang from "./paihang.json";
import data from "./data.json";

Mock.mock("/list/banner",{
    "list":banner
})
Mock.mock("/list/paihang",{
    "list":paihang
})
Mock.mock("/list/data",{
    "list":data
})

Mock.mock("/list/login",(options)=>{
    // console.log(JSON.parse(options.body))
    const username=JSON.parse(options.body).user;
    const pwds=JSON.parse(options.body).pwd;
    if(username==="whh"&&pwds==="123"){
       return {
           code:1,
           msg:"成功"
       }
    }else{
        return {
            code:0,
            msg:"失败"
        }
    }
})
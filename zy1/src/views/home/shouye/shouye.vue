<template>
  <div class="shouye">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
          <img :src="require('@/assets/'+item.image)" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/mock/index.js";
import Swiper from "swiper";
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      bannerlist: [],
      mySwiper: null
    };
  },
  created() {
    this.$http("/list/banner").then(res => {
      // console.log(res.data.list);
      this.bannerlist = res.data.list;
      // 可以写在此处
    //   this.$nextTick(() => {
    //     this.mySwiper = new Swiper(".swiper-container", {
    //       loop: true
    //     });
    //   });
    });
  },
  mounted() {
    if (this.mySwiper != null) return;// 渲染完再执行swiper
    // 等数据加载完并且渲染完页面再运行
    setTimeout(()=>{
       this.mySwiper = new Swiper(".swiper-container", {
      loop:true,
      autoplay:{
        delay:1000,
        disableOnInteraction: false
      }
    });
    },300)
  },
  watch: {
    // 随时监听bannerlist数据的变化
    bannerlist(data) {
      // swiper放在$nextTick下一个UI帧再初始化
      this.$nextTick(() => {
        this.mySwiper && this.mySwiper.updateSlides();
      });
    }
  }
};
</script>

<style scoped lang="scss">
.shouye {
  width: 100%;
  height: 100%;
  .swiper-container {
    height: 200px;
    width: 100%;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      .swiper-slide,
      .swiper-slide img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
<!--
  @description：服务使用的滚动组件
  @createTime：2020-08-16 22:46:22
  @author：luomingkai
  @lastUpdateTime：
  @props：
  @emit：
  @version：
-->
<template>
  <div class="service-swiper-container">
    <div class="swiper-container" id="custom-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in swiperSlideList" :key="'slide' + index">
          <img :src="item.image" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    swiperSlideList: {
      // 滚动图片集合
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      swiperObj: null,
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$nextTick(() =>{
       this.initSwiper();
    })
  },
  // 方法集合
  methods: {
    initSwiper() {
      setTimeout(() => {
        this.swiperObj = new Swiper("#custom-swiper", {
          // autoplay: true,
          autoplay: {
            delay: 1000, //1秒切换一次
            disableOnInteraction: false
          },
          slidesPerView: 1,
          loop: true,
          observeParents: true,
          // 如果需要分页器
          pagination: ".swiper-pagination",
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }, 300)
      
    },
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMoun() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
// @import url(); 引入公共css类
.service-swiper-container {
  height: 100%;
  .swiper-container {
    height: 100%;
    .swiper-slide {
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>

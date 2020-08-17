<!--
  @description：首页页面
  @createTime：2020-08-16 16:04:29
  @author：luomingkai
  @lastUpdateTime：
  @props：
  @emit：
  @version：
-->
<template>
  <div class='first-page-container'>
      <div class="swiper-container">
        <service-swiper :swiperSlideList="swiperSlideList"></service-swiper>
      </div>
      <div class="service-info-container">
      </div>
  </div>
</template>

<script>
import serviceSwiper from '@/components/serviceSwiper'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {serviceSwiper},
  props: {},
  data () {
    return {
      swiperSlideList: [],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  // 方法集合
  methods: {},
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMoun () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
// @import url(); 引入公共css类
.first-page-container {
    .swiper-container {
        width: 100%;
        height: 500px;
    }
    .service-info-container {
        // background-image: url('@/static/img/firstPage/background.png');
    }
}
</style>

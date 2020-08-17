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
  <div class='service-swiper-container'>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    swiperSlideList: { // 滚动图片集合
       type: Array,
       default: () => { return [] }
    }
  },
  data () {
    return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
    }
  },
  // 监听属性 类似于data概念
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
      this.swiper.slideTo(3, 1000, false)
  },
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
</style>

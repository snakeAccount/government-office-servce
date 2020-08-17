<!--
  @description：服务中心首页的尾部组件
  @createTime：2020-08-16 14:04:32
  @author：luomingkai
  @lastUpdateTime：
  @props：
  @emit：
  @version：
-->
<template>
  <div class='service-center-foot-container'>
      <div class="content-left">
          <img src="../static/img/components/red.png" alt="底部LOGO">
      </div>
      <div class="content-center">
          <div>
              <span style="margin-right:10px">主管单位：{{footDataInfo.competentUnit}}</span>
              <span>承办单位：{{footDataInfo.organizer}}</span>
          </div>
          <div>
              <span style="margin-right:10px">技术支持：{{footDataInfo.technicalSupport}}</span>
              <span>联系我们：{{footDataInfo.contactUs}}</span>
          </div>
          <div>
              <span>网站标识码：{{footDataInfo.WebsiteIdentificationCode}}</span>
          </div>
      </div>
      <div class="content-right">
          <img src="../static/img/components/error.png" alt="找错">
      </div>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data () {
    return {
        /** 
         * 底部数据信息
        */
        footDataInfo: {
            competentUnit: 'xxxxx人民政府办公厅',
            organizer: 'xxxx政府政务服务和公共资源交易服务中心',
            technicalSupport: '中国xxxx公司',
            contactUs: '028-xxxxxx',
            WebsiteIdentificationCode: 'xxxxxxxx'
        }
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
.service-center-foot-container {
    display: flex;
    height: 85px;
    width: 100%;
    margin-top: 20px;
    background-color: rgba(0, 120, 255, 0.15); 
    .content-left {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .content-center {
        width: calc(40% - 60px);
        padding-left: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .content-right {
        width: 30%;
        display: flex;
        align-items: center;
    }
}
</style>

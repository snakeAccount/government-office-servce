<!--
  @description：服务中心首页的头部组件
  @createTime：2020-08-16 00:01:50
  @author：luomingkai
  @lastUpdateTime：
  @props：
  @emit：
  @version：v1.0
-->
<template>
  <div class="service-center-header-container">
    <div class="logo-area">
      <div class="title-info">
        <div class="logo-img">
          <img src="../static/img/components/logo.png" alt="服务LOGO" />
        </div>
        <div class="text">
          <div>
            <span>XXX政务服务中心</span>
          </div>
          <div>
            <span>欢迎访问XXX政务中心服务网站</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-area">
      <div class="area-name">{{centerContentInfo.areaName}}</div>
      <div class="select-list-reveal" 
          v-for="(item,index) in centerContentInfo.dataList"
          :key="'center' + index">
        <Icon :type="item.icon" color="#236B95" size="25"></Icon>
        <div class="text">
          <span style="font-size: 16px">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="login-info-area">
      <div class="select-list-reveal" 
          v-for="(item,index) in rightContentInfo"
          :key="'right' + index">
        <Icon :type="item.icon" color="#236B95" size="25"></Icon>
        <div class="text">
          <span style="font-size: 16px">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    return {
      /** 
       * 中间数据区变量定义
      */
      centerContentInfo: { 
        areaName: '省级',
        dataList: [
          {icon: 'md-pin', name: '区域切换', eventName: ''},
          {icon: 'md-home', name: '部门信息', eventName: ''}
        ]
      },
      /** 
       * 右侧数据区变量定义
      */
      rightContentInfo: [
        {icon: 'md-person', name: '登录', eventName: ''},
        {icon: 'md-create', name: '注册', eventName: ''},
        {icon: '', name: 'App', eventName: ''},
        {icon: '', name: '微信公众号', eventName: ''},
      ]
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {},
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
.service-center-header-container {
  width: 100%;
  height: 112px;
  display: flex;
  .logo-area {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .title-info {
      height: 100%;
      width: 340px;
      display: flex;
      align-items: center;
      .logo-img {
        img {
          border-radius: 5px;
        }
      }
      .text {
        padding-left: 10px;
        height: 65px;
        div:nth-child(1) {
          span {
            font-size: 30px;
            color: #000000;
          }
        }
        div:nth-child(2) {
          span {
            font-size: 10px;
          }
        }
      }
    }
  }
  .content-area, .login-info-area {
    width: calc(34% - 60px);
    padding-left: 60px;
    display: flex;
    align-items: center;
    ::v-deep .ivu-icon {
      margin-right: 5px;
    }
    .area-name {
        font-size: 24px;
        color: #000000;
    }
    .select-list-reveal {
      display: flex;
      align-items: flex-end;
      margin-left: 30px;
      .text {
        cursor: pointer;
      }
    }
  }
  .login-info-area {
    width: 40%;
  }
}
</style>

<!--
  @description：程序的入口主页面
  @createTime：2020-08-16 00:55:34
  @author：luomingkai
  @lastUpdateTime：
  @props：
  @emit：
  @version：
-->
<template>
  <div class='service-center-main-container'>
      <service-center-header></service-center-header>
      <div class="nav-list">
        <ul>
          <li v-for="(item,index) in navDataList"
              :key="'nav' + index"
              @click="handleNavigate(item,index)">
              <router-link 
                :to="{ 'path': item.path}"
                tag="div"
                >{{item.name}}</router-link>
              </li>
        </ul>
      </div>
      <div>
        <router-view/>
      </div>
      <service-center-foot></service-center-foot>
  </div>
</template>

<script>
import serviceCenterHeader from '@/components/serviceCenterHeader'
import serviceCenterFoot from '@/components/serviceCenterFoot'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {serviceCenterHeader, serviceCenterFoot},
  props: {},
  data () {
    return {
      /** 
       * 导航数据列表
      */
      navDataList: [
        {name: '首页', path: '/firstPage'},
        {name: '个人服务', path: '/individualService'},
        {name: '法律法规', path: '/enactment'},
        {name: '案件信息', path: '/caseInfo'},
        {name: '信息登录', path: '/informationLogin'},
        {name: '统计报表', path: '/statisticsForm'},
        {name: '地图', path: '/mapInfo'},
        {name: '统计分析', path: '/statisticsAnalysis'},
      ],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.$store.dispatch('eidtCurrentPath', to)
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    if (Object.is(this.$route.path, '/')) {
      this.$router.push('/firstPage');
    }
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  // 方法集合
  methods: {
    
    /**
     * @description 处理导航的点击事件
     * @param item  当前导航的信息
     * @param index 导航的索引
     * @crateTime 2020-08-16 13:56:02
     */
    handleNavigate (item, index) {
      // console.log('点击事件')
      console.log(item)
      console.log(index)
    }
  },
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
.service-center-main-container {
  min-width: 1200px;
  .nav-list {
    height: 50px;
    background: -moz-linear-gradient(right, #1a3784 0%, #34bab2 100%);
    background: -webkit-gradient(linear, left, right, color-stop(0%,#1a3784), color-stop(100%,#34bab2));
    background: -webkit-linear-gradient(right, #1a3784 0%,#34bab2 100%);
    background: -o-linear-gradient(right, #1a3784 0%,#34bab2 100%);
    background: -ms-linear-gradient(right, #1a3784 0%,#34bab2 100%);
    background: linear-gradient(to right, #1a3784 0%,#34bab2 100%);
    ul {
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        height: 100%;
        padding-left: 2%;
        padding-right: 2%;
        list-style: none;
        div {
          height: 100%;
          display: flex;
          align-items: center;
          color: #fff;
          font-size: 17px;
          cursor: pointer;
        }
        .router-link-active {
          border-bottom: 3px solid orangered;
        }
      }
    }
  }
}
</style>

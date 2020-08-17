<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  font-size: 14px;
  font-family: 微软雅黑;
  line-height: normal;
}
html {
  padding: 0px;
  margin: 0px;
  body {
    padding: 0px;
    margin: 0px;
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      padding: 0px;
      margin: 0px;
    }
  }
}
</style>

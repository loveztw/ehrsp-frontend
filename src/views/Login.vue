<template>
  <el-container :style="backgroundStyle">
      <el-main>
        <login-box v-if="pageControl.pageType == 0"></login-box>
        <register-box v-else></register-box>
      </el-main>
  </el-container>
</template>

<style>
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  /* 去掉浏览器右侧滚动条 */
  html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
  }
</style>

<script>
import loginBox from '@/components/LoginBox'
import registerBox from '@/components/RegisterBox'

export default {
  name: 'Login',

  components: {
    loginBox,
    registerBox
  },

  data () {
    return {
      backgroundStyle: {
        height: window.innerHeight + 'px',
        background: 'url(' + require('../assets/img/login_bg.jpg') + ') no-repeat center center',
        // backgroundRepeat: 'no-repeat'
        backgroundSize: '100%'
      },

      pageControl: {
        // 0 => 登录页
        // 1 => 注册页
        pageType: 0
      }
    }
  },

  methods: {
    pageManage: function (pageType) {
      this.pageControl.pageType = pageType
    }
  }
}
</script>

<template>
  <div class="my-header">
    <el-header height="40px" class="header-top">
      <div class="login">
        <span v-on:click="onDirectToLogin()" style="cursor:pointer">登录 | 注册</span>
      </div>
    </el-header>
    <el-header height="120px" class="header-bottom">
      <div class="logo-pic">
        <img src="../assets/img/ehrsp_logo.png"/>
      </div>
    </el-header>
    <el-menu mode="horizontal">
        <el-menu-item index="1">
            <span class="menu-text">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
            <span class="menu-text">新闻动态</span>
        </el-menu-item>
        <el-menu-item index="3">
            <span class="menu-text">政务公开</span>
        </el-menu-item>
        <el-menu-item index="4">
            <span class="menu-text">办事服务</span>
        </el-menu-item>
        <el-menu-item index="5">
            <span class="menu-text">互动交流</span>
        </el-menu-item>
        <el-menu-item index="6">
            <span class="menu-text">城市名片</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
  .header-top {
    background-color: rgb(109, 185, 236);
  }

  /* .header-bottom {
    background-color: blue;
  } */

  .el-menu {
    /* background-color: grey; */
    width: 100%;
    margin: 0 auto; /* 水平居中 */

  }

  .el-menu-item {
    width: 205px;
    text-align: center;
  }

  .menu-text {
    font-size: 20px;
  }

  .logo-pic {
    float: left;
    margin-top: 25px;
  }

  .login {
    float: right;
    margin-top: 11px;
    margin-right: 70px;
  }
</style>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
    onDirectToLogin: function () {
      this.$router.push({path: '/Login'})
    }
  }
}
</script>

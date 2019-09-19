<template>
  <div class="my-header">
    <el-header height="30px" class="header-top"></el-header>
    <el-header height="120px" class="header-bottom"></el-header>
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
    background-color: yellow;
  }

  .header-bottom {
    background-color: blue;
  }

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
</style>

<script>
export default {

}
</script>

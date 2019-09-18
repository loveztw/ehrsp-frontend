<template>
    <el-container>
        <el-header height="200px">
            <div class="header-top"></div>
            <div class="header-bottom"></div>
            <el-menu mode="horizontal">
                <el-menu-item index="1">
                    <span class="menu-text">首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <span class="menu-text">新闻中心</span>
                </el-menu-item>
            </el-menu>
        </el-header>
    </el-container>
</template>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    /* line-height: 60px; */
  }

  .header-top {
    background-color: yellow;
    height: 15%;
  }

  .header-bottom {
    background-color: blue;
    height: 50%;
  }

  .el-menu {
    background-color: grey;
    width: 80%;
    margin: 0 auto; /* 水平居中 */

  }

  .menu-text {
    font-size: 20px;
  }
</style>

<script>
export default {

}
</script>

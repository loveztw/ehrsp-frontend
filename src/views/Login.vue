<template>
  <el-container :style="height">
    <!-- <el-header>Header 默认 height: 60px;</el-header> -->
    <!-- <el-container :style="height">
      <el-aside width="200px">Aside</el-aside> -->
      <el-main>
        <!-- <el-col>
          <span>Main</span>
        </el-col>
        <el-col>
          <span>height:window.innerHeight - 120</span>
        </el-col>
        <el-col>
          <span>(右侧通常会有上下滚动栏,120 + 16左右就会消失)</span>
        </el-col> -->
        <el-form>

        </el-form>
      </el-main>
    <!-- </el-container> -->
    <el-footer>Footer 默认 height: 60px;</el-footer>
  </el-container>
</template>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-form {
      background-color: red;
      height: 300px;
      width: 350px;
      margin: 0 auto; /* 水平居中 */
      position: relative; /*脱离文档流*/
      top: 50%; /*绝对偏移*/
      margin-top: -150px; /*相对偏移*/
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
export default {
  data () {
    return {
      height: {
        height: window.innerHeight + 'px'
      }
    }
  }
}
</script>

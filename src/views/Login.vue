<template>
  <el-container :style="backgroundStyle">
      <el-main>
        <div class='login-box'>
          <div class='login-header'>
            <h3 style="margin-left: 30px">登 录</h3>
          </div>
          <div class='login-body'>
            <div class='login-body-inner'>
              <el-form>
                <el-form-item>
                  <el-input type="text" placeholder="电话号码"/>
                </el-form-item>
                <el-form-item>
                  <div style="float: left">
                    <el-input type="text" placeholder="验证码" style="width: 140px;"/>
                    <el-button style="margin-left: 33px;">发送验证码</el-button>
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" v-on:click="onSubmit('loginForm')" style="width: 100%;">登录</el-button>
                </el-form-item>
                <el-form-item>
                  <div style="float: left; color: blue;">
                      <span>用户名密码登录</span>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>

      </el-main>
    <!-- </el-container> -->
    <el-footer>Footer 默认 height: 60px;</el-footer>
  </el-container>
</template>

<style>
  /* .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  } */

  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .login-box {
      background-color: white;
      height: 350px;
      width: 350px;
      margin: 0 auto; /* 水平居中 */
      position: relative; /*脱离文档流*/
      top: 50%; /*绝对偏移*/
      margin-top: -150px; /*相对偏移*/
  }

  .login-body-inner {
    /* background-color: blue; */
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
  }

  .login-header {
    background-color: rgb(229, 232, 233);
    height: 60px;
    line-height: 60px;
    text-align: left;
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
      backgroundStyle: {
        height: window.innerHeight + 'px',
        background: 'url(' + require('../assets/img/login_bg.jpg') + ') no-repeat center center',
        // backgroundRepeat: 'no-repeat'
        backgroundSize: '100%'
      }
    }
  }
}
</script>

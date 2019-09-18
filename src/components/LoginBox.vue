<template>
    <div class='login-box'>
        <div class='login-header'>
            <h3 style="margin-left: 30px">登 录</h3>
        </div>
        <div class='login-body'>
            <div class='login-body-inner'>
                <el-form>
                    <el-form-item>
                        <el-input v-if="loginObj.loginType == 0" type="text" placeholder="电话号码"/>
                        <el-input v-else type="text" placeholder="电话号码/邮箱"/>
                    </el-form-item>
                    <el-form-item>
                        <div v-if="loginObj.loginType == 0" style="float: left">
                        <el-input type="text" placeholder="验证码" style="width: 140px;"/>
                        <el-button style="margin-left: 33px;">发送验证码</el-button>
                        </div>
                        <div v-else>
                            <el-input type="password" placeholder="密码"/>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="onSubmit('loginForm')" style="width: 100%;">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <div style="float: left; color: blue;">
                            <span v-on:click="onSwitchLoginType()" style="cursor:pointer">{{loginObj.switchShowText}}</span>
                            <span v-on:click="onPageSwitch()" style="cursor:pointer; margin-left: 80px;">没有账号？注册</span>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style>

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
</style>

<script>

export default {
  name: 'LoginBox',

  data () {
    return {
      loginObj: {
        // 0 => 手机验证码登录
        // 1 => 密码登录
        loginType: 0,
        switchShowText: this.ShowText.LOGIN_SHOW_SWITCH_VERIFYCODE
      }
    }
  },

  methods: {
    onSwitchLoginType: function () {
      if (this.loginObj.loginType === 0) {
        this.loginObj.loginType = 1
        this.loginObj.switchShowText = this.ShowText.LOGIN_SHOW_SWITCH_PASSWORD
      } else {
        this.loginObj.loginType = 0
        this.loginObj.switchShowText = this.ShowText.LOGIN_SHOW_SWITCH_VERIFYCODE
      }
    },

    onPageSwitch: function () {
      this.$parent.$parent.$parent.pageManage(1)
    }
  }
}
</script>

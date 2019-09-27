<template>
    <div class='login-box'>
        <div class='login-header'>
            <h3 style="margin-left: 10px; cursor:pointer" v-on:click="onDirectToMain()">企业人才服务平台 | 登录</h3>
        </div>
        <div class='login-body'>
            <div class='login-body-inner'>
                <el-form>
                    <el-form-item>
                        <el-input v-if="loginObj.loginType == 0" v-model="loginid" type="text" placeholder="电话号码"/>
                        <el-input v-else type="text" v-model="loginid" placeholder="电话号码/邮箱"/>
                    </el-form-item>
                    <el-form-item>
                        <div v-if="loginObj.loginType == 0" style="float: left">
                          <el-input type="text" v-model="token" placeholder="验证码" style="width: 140px;"/>
                          <el-button v-show="show" @click="onSendVerifyCode" style="margin-left: 33px;">发送验证码</el-button>
                          <el-button v-show="!show" disabled="true" style="margin-left: 70px;">{{count}}s</el-button>
                        </div>
                        <div v-else>
                            <el-input type="password" v-model="token" placeholder="密码"/>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="onSubmit()" style="width: 100%;">登录</el-button>
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
let Base64 = require('js-base64').Base64

export default {
  name: 'LoginBox',

  data () {
    return {
      loginObj: {
        // 0 => 手机验证码登录
        // 1 => 密码登录
        loginType: 0,
        switchShowText: this.ShowText.LOGIN_SHOW_SWITCH_PASSWORD
      },

      loginid: '',
      token: '',
      timer: null,
      count: '',
      show: true
    }
  },

  methods: {
    onSwitchLoginType: function () {
      if (this.loginObj.loginType === 0) {
        this.loginObj.loginType = 1
        this.loginObj.switchShowText = this.ShowText.LOGIN_SHOW_SWITCH_VERIFYCODE
      } else {
        this.loginObj.loginType = 0
        this.loginObj.switchShowText = this.ShowText.LOGIN_SHOW_SWITCH_PASSWORD
      }
    },

    onDirectToMain: function () {
      this.$router.push({path: '/main'})
    },

    onPageSwitch: function () {
      this.$parent.$parent.$parent.pageManage(1)
    },

    onSubmit: function () {
      if (this.loginid === '' || this.token === '') {
        alert('请填写登录信息')
        return
      }

      var postUrl = ''
      if (this.loginObj.loginType === 0) {
        postUrl = `${this.baseURL}/user/login-vcode?mobile=${this.loginid}&verifyCode=${this.token}`
      } else {
        var base64Token = Base64.encode(this.token)
        postUrl = `${this.baseURL}/user/login-pass?loginid=${this.loginid}&password=${base64Token}`
      }

      this.axios({
        method: 'post',
        url: `${postUrl}`,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response)
          var status = response.data.status
          if (status !== 200) {
            var errCode = response.data.data.code
            if (errCode === 0x9008) {
              alert('电话号码没有注册')
            } else if (errCode === 0x9009) {
              alert('邮箱没有注册')
            } else if (errCode === 0x9004) {
              alert('无效的验证码')
            } else if (errCode === 0x9010) {
              alert('密码错误')
            } else {
              alert('内部错误')
            }
          } else {
            // 登录成功
            this.onDirectToMain()
          }
        })
        .catch((error) => {
          alert('内部错误' + error)
        })
    },

    onSendVerifyCode: function () {
      var mobile = this.loginid
      if (mobile === '') {
        alert('请填写电话号码')
        return
      }

      this.axios({
        method: 'post',
        url: `${this.baseURL}/sms/send-verify-code?telNumber=${this.loginid}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
        .then((response) => {
          console.log(response)
          var status = response.data.status
          if (status !== 200) {
            var errCode = response.data.data.code
            if (errCode === 0x9001) {
              alert('无效的电话号码')
            } else if (errCode === 0x9002) {
              alert('电话号码已注册')
            } else {
              alert('内部错误')
            }
          } else {
            if (!this.timer) {
              var countConst = 5
              this.show = false
              this.count = countConst
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= countConst) {
                  this.count--
                } else {
                  clearInterval(this.timer)
                  this.timer = null
                  this.show = true
                }
              }, 1000)
            }
          }
        })
        .catch((error) => {
          alert('内部错误' + error)
        })
    }
  }
}
</script>

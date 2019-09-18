<template>
    <div class='register-box'>
        <div class='register-header'>
            <h3 style="margin-left: 30px">注 册</h3>
        </div>
        <div class='register-body'>
            <div class='register-body-inner'>
                <el-form>
                    <el-form-item>
                        <el-input v-model="registerInfo.mobile" type="text" placeholder="电话号码"/>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="registerInfo.password" type="password" placeholder="密码"/>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="reTypePassword" type="password" placeholder="再输一次密码"/>
                    </el-form-item>
                    <el-form-item>
                        <div style="float: left">
                          <el-input v-model="registerInfo.verifyCode" type="text" placeholder="验证码" style="width: 140px;"/>
                          <el-button v-show="show" @click="onSendVerifyCode" style="margin-left: 33px;">发送验证码</el-button>
                          <el-button v-show="!show" disabled="true" style="margin-left: 70px;">{{count}}s</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="onSubmit('loginForm')" style="width: 100%;">注册</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="onPageSwitch()" style="width: 100%;">返回登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style>

  .register-box {
      background-color: white;
      height: 470px;
      width: 350px;
      margin: 0 auto; /* 水平居中 */
      position: relative; /*脱离文档流*/
      top: 50%; /*绝对偏移*/
      margin-top: -280px; /*相对偏移*/
  }

  .register-body-inner {
    /* background-color: blue; */
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
  }

  .register-header {
    background-color: rgb(229, 232, 233);
    height: 60px;
    line-height: 60px;
    text-align: left;
  }
</style>

<script>

export default {
  name: 'RegisterBox',

  data () {
    return {
      registerInfo: {
        mobile: '',
        password: '',
        verifyCode: ''
      },

      reTypePassword: '',
      timer: null,
      count: '',
      show: true
    }
  },

  methods: {
    onPageSwitch: function () {
      this.$parent.$parent.$parent.pageManage(0)
    },

    onSendVerifyCode: function () {
      var mobile = this.registerInfo.mobile
      if (mobile === '') {
        alert('请填写电话号码')
      }

      this.axios({
        method: 'post',
        url: `${this.baseURL}/sms/send-verify-code?telNumber=${this.registerInfo.mobile}`,
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

<template>
  <div class="login">
    <div class="logo-pic"></div>
    <div class="form-list">
      <li>
        <input type="text" v-model.lazy="value">
      </li>
      <li>
        <input type="password" v-model.lazy="pwd">
      </li>
    </div>
    <div class="footer">
      <router-link tag="a" :to="{ name: 'phone_login'}" class="note">短信验证码登录</router-link>
      <router-link tag="a" :to="{ name: 'register'}" class="register">免费注册</router-link>
    </div>
    <button class="btn" @click="Sign_in()">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      pwd: ''
    }
  },
  methods: {
    Sign_in () {
      if (this.value != '' && this.pwd != '') {
        localStorage.setItem('username', this.value)
        this.$router.back()
      }
    }
  }
}
</script>

<style lang="less">
  body{
    background: #fff;
  }
  .login{
    width:100%;
    height:100%;
    .logo-pic{
      width:80px;
      height:80px;
      border-radius:80px;
      background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat;
      background-size: contain;
      margin: 47px 147px 0;
    }
    .form-list{
      padding: 0 20px;
      height:100px;
      & li{
        height:26px;
        margin-top:45px;
        border-bottom:1px solid #ff5000;
        & input{
          margin-left:10px;
          border: 0;
          height:18px;
          width:250px;
          background-color: transparent;
        }
      }
    }
    .footer{
      height:14px;
      margin:22px 23px 0;
      line-height: 14px;
      display: flex;
      justify-content: space-between;
      & a{
        color:#555;
        font-size:14px;
      }
    }
    .btn{
      background:linear-gradient(left,#ff9000,#ff5000) no-repeat;
      color: #fff;
      box-shadow: 0 0.08rem 0.16rem #f7c7b1;
      padding:1px 6px;
      margin:36px 0 0 32px;
      width:317px;
      height:45px;
      text-align: center;
      cursor: default;
      line-height: 43px;
      border-radius:22px;
      border:0;
      font-size:18px;
    }
  }
</style>

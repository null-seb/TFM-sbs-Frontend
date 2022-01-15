<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">Login</a>
      <span>·</span>
      <a href="/register">Sign up</a>
    </div>

    <div class="sign-up-container">
      <form action="register">
        <div class="input-prepend restyle">
          <input
            v-model="user.mobile"
            type="text"
            placeholder="mobile">
          <i class="iconfont icon-phone"/>
        </div>
        <div class="input-prepend">
          <input
            v-model="user.password"
            type="password"
            placeholder="password">
          <i class="iconfont icon-password"/>
        </div>
        <div class="btn">
          <input
            type="button"
            class="sign-in-button"
            value="Login"
            @click="submitLogin()">
        </div>
      </form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>More sign</h6>
        <ul>
          <li><a id="weixin" class="weixin" href="http://localhost:8150/api/ucenter/wx/login"><i class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'
import cookie from 'js-cookie'
import loginApi from '~/api/login'

export default {
  layout: 'sign',

  data() {
    return {
      user: {
        mobile: '',
        password: ''
      }
    }
  },

  methods: {
    // 登录
    submitLogin() {
      // 执行远程登录接口调用
      loginApi.submitLogin(this.user).then(response => {
        // 将jwt写入cookie
        cookie.set('sbs_jwt_token', response.data.token, { domain: 'localhost' })

        // 跳转到网站的首页面
        window.location.href = '/'
      })
    }
  }
}
</script>

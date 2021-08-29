<template>
  <view class="login">
    <h1>登录状态: {{LoginStatus}}</h1>
    <button @click="handleLogin(true)">登录</button>
    <button @click="handleLogin(false)">退出</button>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    LoginStatus() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    handleLogin(isLogin) {
      this.$store.commit('login', isLogin);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background-color: #fff;
  button {
    display: inline-block;
    margin-top: 20rpx;
    margin-right: 20rpx;
  }
}
</style>

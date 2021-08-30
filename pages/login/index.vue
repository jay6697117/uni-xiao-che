<template>
  <view class="login">
    <!-- <view>登录状态 LoginStatus: {{ LoginStatus }}</view> -->
    <view>登录状态 isLogin: {{ isLogin }}</view>
    <view>登录状态 hasLogin: {{ hasLogin }}</view>
    <button @click="handleLogin(true)">登录</button>
    <button @click="handleLogin(false)">退出</button>
  </view>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      hasLogin: state => state.hasLogin
    }),
    // ...mapState(['isLogin', 'hasLogin'])
    // LoginStatus() {
    //   return this.$store.state.isLogin;
    // }
  },
  methods: {
    handleLogin(bool) {
      this.$store.commit('login', bool);
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

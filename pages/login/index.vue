<template>
  <view class="login">
    <view style="background: #ccc">登录状态 isLogin: {{ isLogin }}</view>
    <view style="background: #ccc">登录状态 hasLogin: {{ hasLogin }}</view>
    <button @click="handleLogin(true)">登录</button>
    <button @click="handleLogin(false)">退出登录</button>
    <view style="padding-top: 16rpx">
      <navigator url="/pages/index/index" open-type="switchTab">去首页</navigator>
    </view>
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
      hasLogin: state => state.isLogin
    })
  },
  methods: {
    handleLogin(bool) {
      this.$store.dispatch('setLoginAsync', bool);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 20rpx;
  background-color: #fff;
  button {
    display: inline-block;
    margin-top: 20rpx;
    margin-right: 20rpx;
  }
}
</style>

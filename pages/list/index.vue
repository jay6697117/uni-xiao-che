<template>
  <view class="list">
    <button @click="goIndex">去首页2</button>
    <navigator url="/pages/mine/index" open-type="switchTab">去我的</navigator>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    goIndex() {
      console.log('list goIndex run～～～');
      uni.reLaunch({
        url: '/pages/index/index'
      });
    }
  },
  onLoad(option) {
    console.log(`list option:`, option);
  }
};
</script>

<style lang="scss" scoped>
.list {
  // background-color: red;
    navigator {
      margin: 20rpx 0;
  }
}
</style>

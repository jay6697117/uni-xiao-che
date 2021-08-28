<template>
  <view class="mine">
    <button @click="goHome">goList</button>
    <navigator url="/pages/list/index?id=1&name=mine1">去列表</navigator>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    goHome() {
      console.log('goHome run～～～');
      uni.navigateTo({
        url: '/pages/list/index?id=2&name=mine2'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mine {
  padding: 0 32rpx;
}
</style>

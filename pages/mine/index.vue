<template>
  <view class="mine">
    <button @click="goIndex">去首页1</button>
    <navigator url="/pages/list/index?id=1&name=mine1" open-type="navigate">去列表2</navigator>
    <navigator url="/pages/login/index" open-type="navigate">去登录页</navigator>
    <button @click="handleSetStorage">设置storage</button>
    <view class="iconfont-wrap">
      <view class="iconfont iconwodedingdan"></view>
      <view class="iconfont iconcailing"></view>
    </view>
    <view>
      <view>computed取store中数据结果:{{ count }}</view>
      <view>直接取store中数据结果:{{ $store.state.count }}</view>
      <view>
        <button @tap="add">+</button>
        <button @tap="sub">-</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    add() {
      this.$store.commit('addCount', 100);
    },
    sub() {
      this.$store.commit('subCount', 50);
    },
    handleSetStorage() {
      try {
        uni.setStorage({
          key: 'storage_key1',
          data: 'hello 111',
          success() {
            console.log('setStorage success');
          }
        });
        uni.setStorageSync('storage_key2', 'hello 222');
      } catch (error) {
        console.log(`handleSetStorage error:`, error);
      }
    },
    goIndex() {
      console.log('mine goIndex run～～～');
      uni.switchTab({
        url: '/pages/index/index'
      });
    }
  },
  onLoad(option) {
    console.log(`mine option:`, option);
  }
};
</script>

<style lang="scss" scoped>
.mine {
  navigator {
    margin: 20rpx 20rpx 20rpx 0;
  }

  .iconfont-wrap {
    margin-top: 40rpx;
  }
}
</style>

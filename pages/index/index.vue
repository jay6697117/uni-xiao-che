<template>
  <view class="content">
    <image @click="handleClick" class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view>globalDataStr: {{ globalDataStr }}</view>
    <view>key1: {{ $store.state.key1 }}</view>
    <view>key1Getter: {{ $store.getters.key1Getter }}</view>
    <view class="shop-cart">
      <xc-cart v-for="cartInfo in cartInfos" :cartInfo="cartInfo"></xc-cart>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      globalDataStr: JSON.stringify(getApp().globalData),
      cartInfos: [
        {
          imgSrc:
            'http://gw.alicdn.com/bao/uploaded/i3/1917047079/O1CN01VlEDD522AEJzpw3A5_!!2-item_pic.png_360x10000.jpg',
          title: 'Apple/苹果 iPhone 11 Pro 666',
          price: '8006.00',
          marketPrice: '8666.00'
        },
        {
          imgSrc:
            'http://gw.alicdn.com/bao/uploaded/i3/1917047079/O1CN01VlEDD522AEJzpw3A5_!!2-item_pic.png_360x10000.jpg',
          title: 'Apple/苹果 iPhone 11 Pro 666',
          price: '8006.00',
          marketPrice: '8666.00'
        },
        {
          imgSrc:
            'http://gw.alicdn.com/bao/uploaded/i3/1917047079/O1CN01VlEDD522AEJzpw3A5_!!2-item_pic.png_360x10000.jpg',
          title: 'Apple/苹果 iPhone 11 Pro 666',
          price: '8006.00',
          marketPrice: '8666.00'
        },
        {
          imgSrc:
            'http://gw.alicdn.com/bao/uploaded/i3/1917047079/O1CN01VlEDD522AEJzpw3A5_!!2-item_pic.png_360x10000.jpg',
          title: 'Apple/苹果 iPhone 11 Pro 666',
          price: '8006.00',
          marketPrice: '8666.00'
        }
      ]
    };
  },
  onLoad() {
    setTimeout(() => {
      console.log('setTimeout run～～～');
      getApp().globalData = { c: 3, d: 4 };
      this.$store.commit('setKey1', 100);
    }, 5000);
  },
  computed: {},
  methods: {
    handleClick() {
      this.$store.commit('addKey1');
      uni.showToast({
        icon: 'loading',
        title: `globalData: ${JSON.stringify(getApp().globalData)}`,
        duration: 1000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;

    .title {
      font-size: 36rpx;
      color: #8f8f94;
    }
  }

  .shop-cart {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    margin-top: 30rpx;
  }
}
</style>

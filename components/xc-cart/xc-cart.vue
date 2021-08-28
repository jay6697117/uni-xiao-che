<template>
  <view class="song">
    <image class="img" :src="cartInfo.imgSrc"></image>
    <view class="content">
      <view class="desc">{{ cartInfo.title }}</view>
      <view class="flex-box">
        <view class="price">￥{{ cartInfo.price }}</view>
        <view class="market-price">{{ cartInfo.marketPrice }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    cartInfo: {
      type: Object,
      default() {
        return {
          imgSrc: '',
          title: '默认商品',
          price: '0.00',
          marketPrice: '0.00'
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.song {
  position: relative;
  width: 328rpx;
  margin-bottom: 30rpx;
  color: #333;
  background-color: #fff;
  border-radius: 10rpx;
  overflow: hidden;
  font-size: 26rpx;

  .img {
    display: block;
    width: 328rpx;
    height: 328rpx;
    background-color: #ccc;
  }

  .content {
    padding: 24rpx 20rpx;
    .desc {
      height: 64rpx;
      line-height: 30rpx;
    }

    .flex-box {
      display: flex;
      justify-content: flex-start;
      .price {
        color: #ff5000;
      }
      .market-price {
        padding-left: 20px;
        font-size: 24rpx;
        color: #979797;
        text-decoration: line-through;
      }
    }
  }
}
</style>

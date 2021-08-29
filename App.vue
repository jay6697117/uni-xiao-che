<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
  globalData: {
    a: 1,
    b: 2
  }
};
</script>

<style lang="scss">
/*每个页面公共css */
@import './common/css/common.scss';
</style>

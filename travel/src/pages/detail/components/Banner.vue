<template>
  <div>
    <div class="banner" @click="handleBannerClick">
        <img class='banner-img' src="http://img1.qunarzz.com/sight/p0/1501/d0/d00d72664c3e73d8.water.jpg_600x330_20d81a68.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">北京天文馆(AAA景区)</div>
            <div class="banner-number"><span class="iconfont arrow-icon banner-icon">&#xe605;</span>39</div>
        </div>
    </div>
    <common-gallary :imgs='imgs' v-show="gallaryClose" @close='handleGallaryClose'></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data(){
    return {
      imgs:['http://img1.qunarzz.com/sight/p0/1501/d0/d00d72664c3e73d8.water.jpg_600x330_20d81a68.jpg',
        'http://img1.qunarzz.com/sight/p0/201403/07/dca171d32e20adbf141e7f8f91b71c0e.jpg_r_800x800_f7e086d4.jpg'],
      gallaryClose: false 
    }
  },
  methods: {
    handleBannerClick (){
      this.gallaryClose = true; 
    },
    handleGallaryClose () {
      this.gallaryClose = false; 
    }
  },
  components: {
      CommonGallary
  }
}
</script>
<style lang='stylus' scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top , rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      line-height .32rem
      margin-top .14rem
      padding 0 .4rem
      border-radius .4rem
      background rgba(0, 0, 0, .8)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>

<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class='swiper-img' :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    //渲染swiper时，会出现轮播图第一次加载进来显示最后一页的问题  
    //这是由于最刚开始定义的  swiperList  是空数组的原因，我们可以通过判断swiperList的长度不为0时，加载swiper，来解决这个问题。
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color: #fff
    .wrapper
        width: 100%
        height: 0
        overflow: hidden
        padding-bottom: 30.67%
        background-color: #eee
        .swiper-img
            width: 100%

</style>

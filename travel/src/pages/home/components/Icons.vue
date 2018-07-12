<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(pageItem, index) of pages" :key='index'>
        <div class="icon" v-for="item of pageItem" :key="item.id">
            <div class="icon-img-content">
            <img class='icon-img' :src="item.imgUrl" alt="">
            </div>
            <p class='icon-desc'>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      //这段代码的逻辑，如下：
      //设置一个空数组pages，循环iconlist，8个为一组，成为swiper的一页，但是iconList的长度不确定，我们不知道它到底能分成几页，所以循环iconList的时候，计算 page = Math.floor(index / 8)的值，若不超过8，则为 page=0。超过8，但小于16， page=1。 超过16，不超过24， page=2，以此类推。即分别为swiper的页数。
      //再判断，当前页数有没有值，若没有，则设为空数组，若有，则把当前item push到该页。
      //上面swiper 循环时，要循环两遍，一遍是swiper的页面，一遍是swiper里面的icon
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    width: 25%
    height: 0
    position: relative
    padding-bottom: 25%
    float: left
    .icon-img-content
        position: absolute
        left: 0
        top: 0
        right: 0
        bottom : .44rem
        box-sizing: border-box
        padding: .12rem
        .icon-img
            display: block
            margin: 0 auto
            height: 100%
    .icon-desc
        position:absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
        ellipsis()
</style>

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

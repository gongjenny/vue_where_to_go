<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="item-list" >
                <div class="item border-bottom" v-for = "item of hotCities" :key="item.id">{{item.name}}</div>
            </div>
        </div>
        <div class="area" v-for= '(items,key) of cities' :key= 'key' :ref='key'>
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" v-for='item of items' :key='item.id'>
                <div class="item border-bottom">{{item.name}}</div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: { //监听变化的数据
    letter () {
      if (this.letter) {
        //每个area 区域对应一个key值，点击的时候，当前的key和 this.letter 是一样的 ，通过this.$refs.name[0]来获取到当前dom元素
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>

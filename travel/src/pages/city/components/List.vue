<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.currentCity}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="item-list">
                <div class="item border-bottom" v-for = "item of hotCities" :key="item.id"
                @click="handleCityClick(item.name)"
                >{{item.name}}</div>
            </div>
        </div>
        <div class="area" v-for= '(items,key) of cities' :key= 'key' :ref='key'>
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" v-for='item of items' :key='item.id'>
                <div class="item border-bottom" @click="handleCityClick(item.name)">{{item.name}}</div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper,{click:true}) // 设置滚动区域
  },
  watch: {
    // letter是从alaphabet那里传到父组件city，再分发这个页面的
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 获取到这个letter 对应的div区域
        this.scroll.scrollToElement(element)  //滚动到当前字母的区域。
      }
    }
  },
  methods: {
    handleCityClick (city) {
      //this.$store.commit('changeCity', city)
      this.changeCity(city)//调取当前映射组件中的changeCity方法，传值到store中，改变city的值
      this.$router.push('/')
    },
    ...mapMutations (['changeCity'])//把store中的changeCity函数映射到当前组件
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

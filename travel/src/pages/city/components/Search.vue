<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li
           class='search-item border-bottom'
           v-for='item of list' :key='item.id' @click='handleCityClick(item.name)'>{{item.name}}
          </li>
          <li class='search-item border-bottom' v-show="hasnoList">没有找到匹配数据</li>
        </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasnoList () {
      return !this.list.length
    }
  },
  methods: {
     handleCityClick (city) {
      //this.$store.commit('changeCity', city)
      this.changeCity(city)//调取当前映射组件中的changeCity方法
      this.$router.push('/')
    },
    ...mapMutations (['changeCity'])//把store中的changeCity函数映射到当前组件
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      padding 0 .1rem
  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
    background #eee
    z-index 1
    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666
</style>

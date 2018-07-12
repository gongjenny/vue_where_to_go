<template>
  <div class="header">
      <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/游玩/主题
      </div>
      <router-link to="/city">
        <div class="header-right">
            {{this.doubleCity}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
  </div>
</template>
<script>
// mapState,mapGetters 的理解参考Home.vue页面，Header_state.vue页面是复制的Header.vue页面，里面是不用展开符的写法
import { mapState,mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    display: flex
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff
    .header-left
        width: 0.8rem
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
    .header-input
        flex: 1
        margin-top:0.14rem
        height:0.6rem
        line-height:0.6rem
        padding-left:.2rem
        background-color: #fff
        border-radius: .1rem
        color: #ccc
    .header-right
        min-width: 1.3rem
        padding 0 .1rem
        float: right
        text-align :center
        color: #fff
        .arrow-icon
            font-size: .24rem
            margin-left:-.04rem
</style>

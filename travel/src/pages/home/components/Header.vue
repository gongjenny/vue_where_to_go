<template>
  <div class="header">
      <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/游玩/主题
      </div>
      <div class="header-right">
          城市
          <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    display: flex
    line-height: 0.88rem
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
        width: 1.3rem
        float: right
        text-align :center
        .arrow-icon
            font-size: .24rem
            margin-left:-.04rem
</style>

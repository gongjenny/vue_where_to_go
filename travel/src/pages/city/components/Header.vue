<template>
  <div class="header">
      城市选择
      <router-link to='/'>
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';
  .header
    position: relative
    overflow: hidden
    width: 100%
    text-align: center
    background: $bgColor
    color:#fff
    font-size: .32rem
    line-height: $headerHeight
    .header-back
      position: absolute
      left: 0
      top: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>

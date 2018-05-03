<template>
  <div class="header">
      <div class="header-left">返回</div>
      <div class="header-input">输入城市/游玩/主题</div>
      <div class="header-right">城市</div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
    .header
        display: flex
        line-height: 0.88rem
        background-color: #00bcd4
        color: #fff
        .header-left
            width: 0.8rem
            float: left
        .header-input
            flex: 1
            margin-top:0.14rem
            height:0.6rem
            line-height:0.6rem
            background-color: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.3rem
            float: right
            text-align :center
</style>
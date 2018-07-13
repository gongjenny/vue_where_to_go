<template>
  <ul class="list">
      <li class="item" v-for='item of letters'
        :key='item'
        :ref="item"
        @click='handleLetterClick'
        @touchstart='handTouchStart'
        @touchmove='handTouchMove'
        @touchend='handTouchEnd'
        >
        {{item}}
      </li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      //for i in  obj,  i是key值，适合遍历对象
      //for i of arr,  i是value值, 适合遍历数组
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handTouchStart () {
      this.touchStatus = true
    },
    handTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // move过程中，计算当前滑到的是哪个字母，然后传给父组件，再传到list页面，对应到字母的区域
          // e.touches[0].clientY  是当前触摸点到最顶部的距离。
          // 80 是  城市选择 + 搜索框的 height。
          // touchY 是 触摸点到搜索框的距离。
          // this.startY 是字母 A 到 搜索框的距离。
          // 20 是 每个字母的height。
          const touchY = e.touches[0].clientY - 80
          console.log(e.touches[0].clientY, this.startY );
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
        text-align center
        line-height .4rem
        color $bgColor

</style>

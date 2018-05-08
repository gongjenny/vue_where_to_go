<template>
  <div>
     <div class="title">周末去哪儿</div>
     <ul>
         <li class="item border-bottom" v-for='item of weekendList' :key='item.id'>
             <div class="item-img-wapper">
                <img class
                ='item-img' :src="item.imgUrl" alt="">
             </div>
             <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
             </div>
         </li>
     </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {}
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
  .title
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item-img-wapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      font-size: .32rem
      line-height: .54rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>

<template>
  <div>
     <div class="title">周末去哪儿</div>
     <ul>
         <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '大连圣亚海洋馆',
        desc: '浪漫大连首站，浪漫海洋主题公园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        title: '大连圣亚海洋馆',
        desc: '浪漫大连首站，浪漫海洋主题公园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
        title: '大连圣亚海洋馆',
        desc: '浪漫大连首站，浪漫海洋主题公园'
      }]
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
  .title
    line-height: .8rem
    text-indent: .2rem
    background: #eee
    margin-top: .2rem
  .item-img-wapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
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

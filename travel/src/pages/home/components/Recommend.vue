<template>
  <div>
     <div class="title">热销推荐</div>
     <ul>
         <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
             <img class
             ='item-img' :src="item.imgUrl" alt="">
             <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
                 <button class="item-button">查看详情</button>
             </div>

         </li>
     </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
        title: '大连圣亚海洋馆',
        desc: '浪漫大连首站，浪漫海洋主题公园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
        title: '大连圣亚海洋馆',
        desc: '浪漫大连首站，浪漫海洋主题公园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
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
  .item
    overflow: hidden
    display: flex
    height:1.9rem
    .item-img
      width:1.7rem
      height:1.7rem
      padding: 0.1rem
    .item-info
      min-width:0
      flex: 1
      padding: 0.1rem
      .item-title
        font-size: .32rem
        line-height: .54rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background:#ff9300
        padding: 0 0.1rem
        border-radius: .06rem
        color:#fff
</style>

 <template>
   <div>
     <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
       <div class="iconfont header-abs-back">&#xe624;</div>
     </router-link>
     <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
       <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe624;</div>  
       </router-link>  
       景点详情
     </div>
   </div>
 </template>
 <script>
 export default {
   name: 'DetailHeader',
   data () {
       return {
           showAbs: true,
           opacityStyle: {
               opacity: 0
           }
       }
   },
   methods: {
       handleScroll () {
           //获取滚动条的高度
           const top = document.documentElement.scrollTop;
           if(top > 60){
               let opacity = top / 140;
               opacity = opacity > 1 ? 1: opacity;
               this.opacityStyle = { opacity }; //键值相等的时候写一个
               this.showAbs = false;
           }else{
               this.showAbs = true;
           }
       }
   },
   activated () { //整个项目最外层包裹的有 keep-alive，打开这个页面并且当页面滚动的时候，执行这个方法,但是这个会//遗留一个问题，就是会影响到别处scroll的使用，因为handleScroll函数添加到了 window 上。解决办法使用 //deactivated钩子函数解绑
       window.addEventListener('scroll',this.handleScroll)
   },
   deactivated () {//当离开这个组件时执行，解绑全局事件
       window.removeEventListener('scroll',this.handleScroll)
   }

 }
 </script>
 <style lang='stylus' scoped>
 @import '~styles/varibles.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    position: fixed
    left 0
    top 0
    right 0
    width: 100%
    text-align: center
    background: $bgColor
    color:#fff
    font-size: .32rem
    line-height: $headerHeight
    .header-fixed-back
      position: absolute
      left: 0
      top: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff 
  

 </style>
 
 
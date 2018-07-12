<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
// 引入各个组件 
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
//使用axios 做数据请求
import axios from 'axios'
//mapState 是 vuex  里面的辅助函数，帮助我们生成计算属性，映射计算属性。
//mapMutations 是 映射函数
//mapGetters  使用对象展开运算符将 getter 混入 computed 对象中
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    //  ...  是对象展开运算符。
    ...mapState(['city']) // 帮助我们把store中的city变量，拿过来，映射到当前的组件。相当于是从store那里复制了一份city，拿到这个组件里面用。store中的city映射到这个组件里面，还叫city。可以通过this.city的形式使用它。
  },
  methods: {
    getHomeInfo () {
      //把首页所需要的数据一次请求过来，可以减少请求次数。/api  是在config/indx.js中配置的。
      axios.get('/api/index.json?city='+ this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      if (res.data.data && res.data.ret) {
        this.swiperList = res.data.data.swiperList
        this.iconList = res.data.data.iconList
        this.recommendList = res.data.data.recommendList
        this.weekendList = res.data.data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city;
    this.getHomeInfo()
  },
  activated () {  //keep-alive 组件激活时调用。配合keep-alive使用，keep-alive有缓存作用，当我们不想取缓存时，可以用activated 函数
    if(this.lastCity !== this.city){
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
}
</script>

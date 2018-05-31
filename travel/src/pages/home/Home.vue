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
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
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
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
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
  activated () {
    console.log('activated');
    if(this.lastCity !== this.city){
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
}
</script>

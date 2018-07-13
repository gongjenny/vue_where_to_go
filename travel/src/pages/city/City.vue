<template>
  <div>
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter='letter'></city-list>
    <city-alphabet :cities="cities" @change='handleLetterChange'></city-alphabet>
  </div>
</template>
<script>
// 城市列表，包括几个头部、 搜索框、城市列表、 字母列表这几个组件
// 主要说一下手滑字母，城市列表会对应到当前字母区域的逻辑
// 子组件alphabet.vue中点击字母，把点击的字母，传给父组件city.vue， 父组件再传值给子组件list.vue，再用BScroll里面的函数，响应到对应字母的区域。 如果不用 子 > 父 > 子  的传递方式，也可以用bus总线的方式 直接 子 > 子 传值。
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      if (res.data.ret && res.data) {
        this.cities = res.data.data.cities
        this.hotCities = res.data.data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style>

</style>

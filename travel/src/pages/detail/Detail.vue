<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class='content'>
       此处景点详情内容不再赘述，开发用到的知识点之前都已经写过。
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  methods: {
    getDetailInfo () {
      // 详情页数据交互，没有具体写，因为填充数据和之前的写法一样，所以把知识点讲一下就ok了。
      // 点击给地址传值的2种写法
      // axios.get('/api/detail.json?id='+ this.$route.params.id)
      axios.get('/api/detail.json?id=',{
        params:{
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc(res){
      console.log(res); 
    }
  },
  mounted () {
    this.getDetailInfo();
  },
  activated () { //解决进入页面的时候，由于缓存的原因，只加载一次数据的问题。也可以使用第二种方法，见App.vue
    this.getDetailInfo();
  }
}
</script>
<style lang='stylus' scoped>
  .content
    height 50rem
    padding-top 1rem
</style>



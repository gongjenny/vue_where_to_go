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
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
<style lang='stylus' scoped>
  .content
    height 50rem
    padding-top 1rem
</style>



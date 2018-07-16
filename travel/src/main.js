// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 项目的入口js
// 把项目中用到的 App.vue启动页面和js引进来
import Vue from 'vue'
import App from './App' // 引入App.vue页面
import router from './router' // 不写index，会默认引入当前目录下的index.js,这个是node的加载方式
import store from './store/index'
import fastClick from 'fastclick' // 解决手机点击会产生300ms延迟的问题
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill' // 解决手机浏览器不支持es6属性的问题
// 下面目录中的'styles', 是通过build/webpack.base.conf.js中的’alias‘配置的
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css' // iconfont具体怎么使用，可去阿里矢量图下载图标代码了解，里面有demo。有几种形式，以unicode为例，简单来说，页面引入iconfont.css，再把这个css里面用到的文件（.eot,.svg,.ttf,.woff等等）copy出来，每个要用的iconfont的标签，都要写上 class=’iconfont‘，然后去阿里矢量图里面找要使用的图标的unicode码，填进去即可。
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。即console.log里面关于vue的信息，你也可以通过设置true，看一下控制台的区别
fastClick.attach(document.body) // 初始化fastclick实例
Vue.use(VueAwesomeSwiper) // 全局使用VueAwesomeSwiper，挂载到vue上，使用时会有2个问题，具体见readme中的第4点

/* eslint-disable no-new */
new Vue({
  el: '#app', // vue实例挂在到id=app 的元素下
  router, // 引入路由
  store, // 引入vuex的store管理
  components: { App }, // 注册App.vue页面
  template: '<App/>' // 模板使用上面注册的 APP
})

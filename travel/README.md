### 1、iconfont
里面的小图标用的是阿里的iconfont，是文字格式，大小由font-size控制。避免了使用图片还要调整高度和位置的麻烦。

### 2、使用webpack配置简化代码
build/webpack.base.conf.js中‘alias’是用于给项目目录起别名使用，可以简化代码，但是切记修改webpack之后要重启一下服务器。  
项目中是这样使用的：  
webpack.base.conf.js中修改如下：
```
alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
    }
```
main.js中使用如下：
```
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
```
**注：css中使用时,前面要加‘~’,如下：**
```
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
<style>
```
### 3、css 起变量名
项目中，有很多时候，很多样式是我们要**重复使用**的，这样我们可以把它**提取到一个文件中**，再引入公共文件就比较方便一些  
varibles.styl 起变量名的文件如下：  
```
$bgColor = #00bcd4
```
Header.vue中使用如下：  
```
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    background-color: $bgColor
<style>
```
### 4、轮播图  
使用的是vue的插件 vue-awesome-swiper，参数配置和swiper一样  
有几个问题如下：  
**4.1、3G下，轮播图下方内容快闪**  
```
    .wrapper
        width: 100%
        height: 0
        overflow: hidden
        padding-bottom: 26.67%  //高度设置为0，padding-bottom是相对于width的100%。
        background-color: #eee
```
**4.2、样式穿透**   
还有一个css样式穿透的问题:我们想修改swiper的轮播按钮的颜色时，直接写样式是不行的,因为style 修饰的当前组件的样式，
但是swiper的样式在全局中，并不在当前组件中，所以我们要用**穿透>>>**的形式修改它的样式才能生效：
```
<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
        background-color: #fff
</style>
```
### 5、使用vue推荐的axios 进行数据请求  
在实际开发中，我们会遇到首页加载数据的问题，我们最好把首页的数据一次加载进来完，避免多次请求数据，消耗性能。  
同时，对于一个组件中要请求数据，我们一般会把数据请求放到最外层去做，这样一次加载进来，就不用再次请求了。  

**5.1、安装axios**  
```
npm install axios --save  
``` 
**5.2、引入axios(以home.vue为例，若某页面使用，引入即可)**  
```
import axios from 'axios'  
```
**5.3、在mounted中使用axios，具体的函数方法写在methods中**  
```
 methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc) //其中的api用到了webpack的代理
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
```
**5.4、config中的index.js修改如下**
```
//这个代理是web-dev-server提供的
proxyTable: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },
```
### 6、渲染swiper时，会出现轮播图第一次加载进来显示最后一页的问题  
这是由于最刚开始定义的  swiperList  是空数组的原因，我们可以通过判断swiperList的长度不为0时，加载swiper，来解决这个问题。
### 7、router-link  
router-link 这个标签用于跳转页面，和原生html中的a标签差不多，其中'to'，就是要跳转的页面。对应到router文件中的index.js里配置的path

```
<router-link to='path'></router-link>
```
还有另一种跳转页面的方法和原生的window.location类似：  
```
this.$router.push('/')
```
### 8、localStorage存储  
要使用try catch 来处理localStorage存储，用户关闭了存储功能，或使用隐身模式等 会出现异常的情况，可处理异常。

### 9、vuex  
vuex 是一个状态管理工具，使用的是单一状态树，vuex它的实例我们称之为store, 使用方法 Vue.use(Vuex)。  
里面有几个的核心的概念：state/getters/mutations/actions/modules,具体使用参考文档。   
...mapState(对象展开运算符)： 使用对象展开运算符将此对象混入到外部对象中。
### 10、使用keep-alive优化页面性能  
此项目每次跳转页面的时候，首页点击header中的城市 跳转到  城市列表页时，每次都会重新数据，这样特别浪费性能。
我们可以使用keep-alive取缓存的特性来优化性能： 
```
<keep-alive>
  <router-view/>
</keep-alive>
```
同时，keep-alive被激活的时候，activated会被调用。
### 11、swiper 配置项 swiperOptions  
当swiper设置隐藏/显示的时候会出现滑动不流畅的情况，是因为width没有加载正确，这时可以设置observeParents,observer，在swiper被触发时, 自己会先刷新一遍，加载正确的宽度。
具体如下：  
```
<swiper :options = "swiperOptions">
  <swiper-slide v-for="(item,index) in imgs" :key="index">
      <img class='gallary-img' :src="item">
  </swiper-slide>
  <div class="swiper-pagination"  slot="pagination"></div>
</swiper>  
data () {
  return {
    swiperOptions: {
      pagination: '.swiper-pagination',
      paginationType: 'fraction',
      observeParents:true,
      observer:true
    }
  }
}
```
### 12、解绑全局事件
```
activated () { //整个项目最外层包裹的有 keep-alive，打开这个页面并且当页面滚动的时候，执行这个方法,但是这个会遗留一个问题，就是会影响到别处scroll的使用，因为handleScroll函数添加到了window上。解决办法使用deactivated钩子函数解绑
       window.addEventListener('scroll',this.handleScroll)
   },
   deactivated () {//当离开这个组件时执行，解绑全局事件
       window.removeEventListener('scroll',this.handleScroll)
   }
```
### 13、export 的 name值的用途  
**13-1、递归组件**
export default{name:'detailList'}中name的一个作用是，自己调用自己的组件(递归)  
```
<template>
  <detail-list></detail-list>
</template>
<script>
  export default{
    name:'detailList'
  }
</script>
```
**13-2、去除缓存**
```
  <keep-alive exclude='Detail'>   //除了Detail组件其他都做缓存
      <router-view/>
  </keep-alive> 
```
**13-3、使用vue-devtools工具调试的时候用**

### 14、详情页面滚动，相互产生会影响
在路由router/index.js 中配置   
```
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // 详情页面传递参数
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 解决热门推荐进入详情页时候，滚动互相产生的影响。
    return { x: 0, y: 0 }
  }
})
```
### 15、 前后端联调  
需要删掉static 中的mock文件，不需要再使用fiddler和charles，只需要在config/index.js中配置如下即可：
```
proxyTable: {
    '/api': {
      target: '后端接口地址',
    }
},
```
### 16、 真机测试  
#### 16-1、localhost 连接 真机测试
找到你电脑的ip，在浏览器中输入ip:8080,这时你会发现本地服务器拒绝了你的请求，是因为webpack配置项不支持ip访问，这时，只需要在package.json中修改配置如下即可。
```
"scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"
  },
修改为：
"scripts": {
    "dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js"
  },

```
重启服务器，真机调试，用手机访问ip:8080即可。  

####16-2、真机上出现的bug

**16-2-bug1、这时会发现真机上测试城市列表页的时候，会出现拖动字母，整个页面也被拖动的问题，这时我们修改代码如下即可：**
```
<template>
  <ul class="list">
      <li class="item" v-for='item of letters'
        :key='item'
        :ref="item"
        @click='handleLetterClick'
        @touchstart.prevent='handTouchStart' //加一个prevent修饰符
        @touchmove='handTouchMove'
        @touchend='handTouchEnd'
        >
        {{item}}
      </li>
  </ul>
</template>
```

**16-2-bug2、还可能出现的问题是，不同的手机进入城市列表页，可能会出现当前页面白屏的问题，一般会有2个原因：**  

**1、手机浏览器不支持es6属性**   

那是因为手机浏览器不支持promise，这时我们安装一个包，npm install babel-polyfill --save，这个包会判断如果浏览器不支持promise，会自动在浏览器中添加es6的新特性。再去main.js 中写入 import 'babel-polyfill' 即可  

**2、webapck打包后即可解决**


**16-2-bug3、点击城市列表没反应,路由有没有跳转。**  
```
this.scroll = new BScroll(this.$refs.wrapper,{click:true})//配置BScroll的click参数   
```
**16-2-bug4、点击详情页面，渐隐渐现的header未出现。**   
```
手机浏览器获取top值有兼容，处理兼容如下：  
const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
```

### 17、打包上线
终端运行 npm run bulid，成功之后项目中会多出来一个dist文件，这个目录就是我们要最终上线的代码。

### 18、vue组件的项目联调，异步组件实现按需加载
webpack，默认打包后的项目是，首次进入项目，就会把项目中用到的所有数据都一次性请求完毕，项目小还没有什么问题，当项目特别大了之后，就会影响性能，这时我们就需要按需加载组件了，修改如下即可：
在router/index.js中修改：
```
import Home from '@/pages/home/Home.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }]
```
修改如下即可：
```
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')
    }]
```
不仅在router中可以这样修改，在组件中也可以这样修改，如Home.vue中，方法雷同不再举例。

## 19、项目完毕，做中型项目应该不大，若是想在深入了解，多研究vue文档，加油！

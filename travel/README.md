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
**在实际开发中，我们会**
**安装axios**  
npm install axios --save   
**home.vue中引入axios**  
import axios from 'axios'  
**在mounted中使用axios，具体的函数方法写在methods中**  
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
**config中的index.js修改如下**
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



去哪网官方地址:  http://touch.piao.qunar.com/
###1、iconfont
里面的小图标用的是阿里的iconfont，是文字格式，大小由font-size控制。避免了使用图片还要调整高度和位置的麻烦。

###2、使用webpack配置简化代码
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
###3、css 起变量名
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






去哪网官方地址:  http://touch.piao.qunar.com/
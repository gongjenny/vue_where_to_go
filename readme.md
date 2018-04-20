### 项目简介
  去哪网，学习中，以后持续补充...


### 1、vue的简介
vue是mvvm 的框架 , m是model,v是view，vm 是vue内置的层。
  jq 更多的是操作dom。而vue是更多的操作数据,数据和页面之间的联动(VM)，就是vue实现的。

### 2、父子组件关系
 html的层级关系就是父和子组件的关系。

### 3、$emit 子 --> 父 传递事件
注册一个组件和使用该组件时，把这个组件的方法，都写到注册组件里面。
   同时，若往父组件传递事件（在注册组件中写this.$emit）时，这个实例组件应该去监听父组件的事件。

### 4、ol ul标签区别
  <ol></ol> 默认前边是 '1,2' 排序的数字; <ul></ul> 默认前边是 '.'

### 5、打印 vm
想看（var vm = ）new Vue() 出来的实例的属性和方法，可以去控制台打印vm；

### 6、methods、computed、watch比较
  methods 不做缓存,不管数据有没有变化,都会调用里面的函数;
  computed 会做缓存，只有在数据变化的时候，才会计算return出来的数据，若不变化，则执行之前缓存的数据，性能更高;
  watch 会做缓存，监听数据的变化，但是实现相同的功能,比computed代码多，没有computed简洁。

### 7、computed 中的 get、set
computed 里面的get和set方法， 若data中的数据发生变化，会通过set把变化的结果返回出来，再通过get计算后，显示到页面；若数据没有变化，只执行get方法，不会执行set函数。

### 8、{{}} 里面可以调函数
插值表达式，{{}}，里面可以调函数，例如: {{fullName()}}

### 9、样式切换No.1
class的对象绑定 ： :class = '{activated: isActived}' ，class = activated，是否显示，取决于 isActived是true 还是false

### 10、样式切换No.2
class可以绑定一个数组，即 :class = '[activated]',通过在data中定义activated，并且在methods中控制 activated 是 ' '和 activated(css中写该样式) 来改变样式。

### 11、样式切换No.3
也可以直接用style来改样式，即 :style = '[],{}',设置数组，对象都可以。

### 12、v-if、v-show 比较
v-if 和 v-show 都可以控制标签的显示和隐藏，但v-if ='false'时会销毁该元素，v-show='false'时，只是display：none了该元素而已。相对来说，频繁切换时，v-show的性能要比v-if 的性能高一些。

### 13、 条件渲染
v-if， v-else-if ， v-else  ，这三个判断要连在一起用，中间不能被其他标签隔断，不然会报错。

### 14、key 管理复用元素
  用  key 管理可复用的元素
  给某个元素赋上key值，vue会认为这个元素是页面上唯一的元素，vue就不会复用这一块的内容。若没有key值，vue机制会为了减少dom的使用，复用这块区域。

### 15、对data操作的7个方法
当我们想对data 数据，进行添加一组数据的时候，不能用下标的方式添加，只能使用vue提供的几个操作数组的方法编译，
    vue提供的数组编译方法有7个：pop，shift，unshfit，reverse，push，splice，sort。




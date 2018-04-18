1、vue是mvvm 的框架 , m是model,v是view，vm 是vue内置的层。
  jq 更多的是操作dom。而vue是更多的操作数据,数据和页面之间的联动(VM)，就是vue实现的。

2、 html的层级关系就是父和子组件的关系。

3、注册一个组件和使用该组件时，把这个组件的方法，都写到注册组件里面。
   同时，若往父组件传递事件（在注册组件中写this.$emit）时，这个实例组件应该去监听父组件的事件。

4、<ol></ol> 默认前边是 '1,2' 排序的数字; <ul></ul> 默认前边是 '.'

5、 想看（var vm = ）new Vue() 出来的实例的属性和方法，可以去控制台打印vm；

6、methods 不做缓存,不管数据有没有变化,都会调用里面的函数;
  computed 会做缓存，只有在数据变化的时候，才会计算return出来的数据，若不变化，则执行之前缓存的数据，性能更高;
  watch 会做缓存，监听数据的变化，但是实现相同的功能,比computed代码多，没有computed简洁。

7、computed 里面的get和set方法， 若data中的数据发生变化，会通过set把变化的结果返回出来，再通过get计算后，显示到页面；若数据没有变化，只执行get方法，不会执行set函数。

8、插值表达式，{{}}，里面可以调函数，例如: {{fullName()}}

9、class的对象绑定 ： :class = '{activated: isActived}' ，class = activated，是否显示，取决于 isActived是true 还是false

10、class可以绑定一个数组，即 :class = '[activated]',通过在data中定义activated，并且在methods中控制 activated 是 ' '和 activated(css中写该样式) 来改变样式。

11、也可以直接用style来改样式，即 :style = '[],{}',设置数组，对象都可以。





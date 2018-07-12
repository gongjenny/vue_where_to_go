import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
//  new Vuex.Store,导出三个内容。其中state,mutations, getters,还有actions，modules，等等是new Vuex.Store({})里面固定的参数，不能改成其他名字。下面为简单方便，引入state和使用state，写成了一样的state名字。
export default new Vuex.Store({
  state, // 导出state.js里面的city。储存状态。
  mutations, // 导出 mutations.js里面的changeCity函数。  用于储存函数
  getters: { // 是类似于store中的计算属性, getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})

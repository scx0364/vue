// 导入vue这个包，得到vue构造函数
import Vue from 'vue'
// 导入项目根组件
import App from './App.vue'

Vue.config.productionTip = false
// 创建vue实例
new Vue({
  render: h => h(App), // render函数指定要渲染到HTML页面中的组件
}).$mount('#app') // vue实例的$mount方法和el属性的作用是一样的

import Vue from 'vue'
import App from './App.vue'
//引入全部vant组件
//缺点：打包体积大，速度慢
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);//注册vant全局

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

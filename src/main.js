// const Vue = require('vue')
import Vue from 'vue' // 현재 폴더에 없으면 다른곳에서 찾아온다.

import App from  './App.vue'

// new Vue({
//   render: function (createElement){
//     return createElement(App)
//   }
// })

// new Vue({
//   render: function(h){
//     return h(App)
//   }
// })

// new Vue({
//   render: (h)=>h(App)
// })

new Vue({
  render: h => h(App)
}).$mount('#app')

// 예전에 썼던 코드
// const app = new Vue({
//   el: '#app'
// })

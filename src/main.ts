import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
const app = createApp(App)

//状态管理
import { createPinia } from 'pinia'
const pinia = createPinia()
//路由
import router from './router/index'

//微信sdk
import wx from "weixin-js-sdk"; //引入微信jssdk

app.config.globalProperties.$wx = wx;

app.use(router)
app.use(pinia)
app.mount('#app')

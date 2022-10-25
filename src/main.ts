import { createApp } from 'vue'
// import './style.css'

import App from './App.vue'
const app = createApp(App)
import router from './router/index'

import wx from "weixin-js-sdk"; //引入微信jssdk

app.config.globalProperties.$wx = wx;

app.use(router)
app.mount('#app')

import axios from 'axios'
import { Toast } from 'vant';
import 'vant/es/toast/style';

// 创建实例时配置默认值
var instance = axios.create({
  // baseURL: "http://localhost:3000/",//正式
  baseURL: import.meta.env.VITE_PATH,//测试 
  timeout: 3000
});

//添加一个请求拦截器
instance.interceptors.request.use(function (config) {
  //在请求发出之前进行一些操作
  // config.headers.token = 'token'
  return config;
});
//添加一个响应拦截器
instance.interceptors.response.use(function (res) {
  if (res.data.code != 0 && (res.config.url == '/activity/chery_num_winner/popular')) {
    Toast(res.data.msg)
    return false;
  }
  //在这里对返回的数据进行处理
  let data = res.data;
  return res.data;
})

export default instance


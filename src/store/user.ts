import { defineStore } from 'pinia'
import { getOpenId } from '../api'
import { Toast } from 'vant';
import 'vant/es/toast/style';
import axios from 'axios';

export const useUserStore = defineStore('users', {
  state: () => {
    return {
      openid: localStorage.getItem('openid') ? localStorage.getItem('openid') : '',
      count: 0
    }
  },
  actions: {
    jia() {
      this.count++
    },
    //静默授权
    async setOpenid(code: any) {
      let that = this;
      let get_data = await axios({
        method: 'post',
        url: 'https://www.ichelaba.com/changcheng/api.php?_a=getToken',
        // 利用 transformRequest 进行转换配置
        transformRequest: [
          function (oldData) {
            let newStr = ''
            for (let item in oldData) {
              newStr += encodeURIComponent(item) + '=' + encodeURIComponent(oldData[item]) + '&'
            }
            newStr = newStr.slice(0, -1)
            return newStr
          }
        ],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: { code: code },
      })

      if (get_data.data.data.openid) {
        localStorage.setItem('openid', get_data.data.data.openid)
        that.openid = get_data.data.data.openid
      } else {
        Toast(get_data.data.msg);
      }
    }
  }
})


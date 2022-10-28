import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from '../store/user'
import { getParams, getCodeState } from '../utils/utils'
import home from "../view/Home.vue";

const routes: any = [
  {
    path: '/',
    component: home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//前置守卫
router.beforeEach(async (to, from, next) => {
  console.log(111)
  //静默授权
  if (useUserStore().openid) {
    next()
    return false;
  }
  const href = window.location.href;
  //判断code
  if (href.indexOf('?code') > -1) {
    //授权获取code
    let { queryObj } = await getCodeState(href);
    //更新授权用户
    await useUserStore().setOpenid(queryObj.code)
  } else {
    let uri = btoa(encodeURIComponent(href));
    // let uri = codeURI(window.location.href);
    var url = `https://www.ichelaba.com/wx_oauth.php?backurl=${uri}`;
    window.location.href = url;
  }
  next()
})

export default router
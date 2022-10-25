<script setup lang="ts">
import wechatConfig from "./utils/wxSdk";
import { onMounted, ref, nextTick, getCurrentInstance, ComponentInternalInstance } from 'vue'

const { appContext: { config: { globalProperties: global } } } = getCurrentInstance() as ComponentInternalInstance;
const _this = global;
onMounted(() => {
  //微信分享
  wechatConfig(
    _this,
    '2022数字营销精英大赛',
    '奇瑞汽车经销商“一垂定音”三大平台，联合作战，多重激励，邀你来战',
  ).then((res) => {
    console.log(res)
  });
})

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>

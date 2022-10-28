<script setup lang="ts">
import { ref } from 'vue'
import { test } from '../api'

import { useUserStore} from '../store/user'
import { storeToRefs } from 'pinia'

//store
const store = useUserStore();
let { count } = storeToRefs(store);
store.jia()

test({
  'Model': 'userinfo'
}).then((res: any) => {
  console.log(res)
})


</script>

<template> 
  <div>
    <h1>home
      <h2>aaa</h2>
      <h3>{{count}}</h3>
    </h1>
    <van-button type="primary">主要按钮</van-button>

  </div>
</template>

<style lang="scss" scoped>
h1 {
  width: 750px;
  font-size: 40px;

  h2 {
    color: red;
  }
}
</style>

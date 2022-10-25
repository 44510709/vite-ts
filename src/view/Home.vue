<script setup lang="ts">
import { test } from '../api'

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

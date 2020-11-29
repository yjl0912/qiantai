<template>
  <div>
    <p>登录组件</p>
    <el-button type="success" @click="login">登录</el-button>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";
export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "111111")
        // .then((res) => {console.log(res)})
        // .catch((err) => {console.log(err)});
    },
  },
};
</script>

<style lang="less" scoped>
</style>

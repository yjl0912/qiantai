<template>
  <div>
    <h1>我是Header</h1>
    <router-link to="/"> 我是Home组件</router-link><br/>
     <router-link to='/login'>我是登录组件</router-link><br/>
    <router-link to="/register">我是注册组件</router-link><br/> 
   

  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="less" scoped>

</style>

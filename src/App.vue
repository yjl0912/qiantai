<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isShow" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from '@comps/Footer'
export default {
  name:'App',
  
  components:{
    Header,
    Footer,
   
  }
}
</script>

<style>

</style>
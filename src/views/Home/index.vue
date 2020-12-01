<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor />
    <!--楼层-->
    <Floor />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

  import TypeNav from '@comps/TypeNav'
  import Brand from './Brand/Brand'
  import Floor from './Floor/Floor'
  import Like from './Like/Like'
  import ListContainer from './ListContainer/ListContainer'
  import Rank from './Rank/Rank'
  import TodayRecommend from './TodayRecommend/TodayRecommend'
  export default {
    name: 'Home',
    //  data(){
    //   return{
    //    floors:[]
    //   }
    // },
    methods:{
      ...mapActions(["REQGETFLOORS"])
    },
    computed:{
      ...mapState({
        floors:(state)=>
          state.home.floors
        
      })
    },
   async mounted(){
      await  this.REQGETFLOORS()
    //  console.log(this.floors)
    },
    components: {
      Brand,
      Floor,
      Like,
      ListContainer,
      Rank,
      TodayRecommend,
      TypeNav
    }
  }
</script>

<style lang="less" scoped>
</style>
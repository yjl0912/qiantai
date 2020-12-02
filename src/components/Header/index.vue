<template>
  <div>
    <div class="header-up">
      <div class="header-left">
        <p>尚品汇欢迎您</p>
        <!-- 图标字体 -->
    <span class="iconfont icon-xiasanjiaoxing"></span>
    <span class="iconfont icon-shangsanjiaoxing"></span>
    <span class="iconfont icon-arrowBottom-fill"></span>
    <span class="iconfont icon-arrowTop"></span>
        <p>
          <span>请</span>
          <router-link to="/login" class="graycolor">登录</router-link>
          <router-link to="/register" class="graycolor">免费注册</router-link>
        </p>
      </div>
      <div class="nav">
        <a href="###">我的订单</a>
        <a href="###">我的购物车</a>
        <a href="###">我的尚品汇</a>
        <a href="###">尚品汇会员</a>
        <a href="###">企业采购</a>
        <a href="###">关注尚品汇</a>
        <a href="###">合作招商</a>
        <a href="###">商家后台</a>
      </div>
    </div>
    <div class="header-down">
      <router-link class="link" to="/">
        <img src="./image/logo.png" alt="" />
      </router-link>

      <div class="search">
        <input type="text" v-model="searchText" />
        <button type="button" @click="search">搜索</button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
    const {categoryName} = this.$route.query
    const {searchText} =this;
    const location ={
      name:'search'
    }
     if(searchText){
       location.params = {
         searchText
       }
     }
     if(categoryName){
       location.query = this.$route.query
     }
    
     this.$router.push(location)
    },
  },
};
</script>



<style lang="less" scoped>
.header-up {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: rgb(234, 234, 234);
}
.header-left {
  display: flex;
  height: 30px;
}
.header-left > p {
  padding: 0 10px 0 0;
  font: 12px/1.3 "Microsoft YaHei", Tahoma, Helvetica, Arial, "\5b8b\4f53",
    sans-serif;
  margin: 10px;
}
.nav > a {
  padding: 0 10px;
  font-size: 12px;
  line-height: 30px;
}
.graycolor,
.nav > a {
  color: rgb(116, 116, 116);
  text-decoration: none;
  cursor: point;
}
.graycolor:hover,
.nav > a:hover {
  text-decoration: underline;
  color: greenyellow;
}
.header-down {
  width: 1200px;
  height: 110.8px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-down .link > img {
  width: 175px;
  height: 56px;
  margin: 25px 45px;
}
.search > input {
  width: 490px;
  height: 32px;
  border: 3px solid rgb(234, 74, 54);
  margin: 36px 0 0 0;
}
.search > input:focus {
  outline: none;
}
.search > button {
  width: 68px;
  height: 40px;
  background-color: rgb(234, 74, 54);
  font-size: 12px;
  color: white;
  position: relative;
  top: 1px;
  left: -2px;
  outline: none;
  border-color: transparent;
}
.search {
  display: felx;
}
</style>

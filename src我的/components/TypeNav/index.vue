<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="isSearchShow = false">
      <h2 class="all" @mouseenter="isSearchShow = true">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name = 'navtype'>
      <div class="sort" v-show="isHomeShow || isSearchShow">
        <div class="all-sort-list2" @click.prevent="addsearch">
          <div class="item bo" v-for="item in category" :key="item.categoryId">
            <h3>
              <a
                href=""
                :data-categoryName="item.categoryName"
                :data-categoryId="item.categoryId"
                :data-categoryType=1
                >{{ item.categoryName }}</a
              >
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl
                  class="fore"
                  v-for="child in item.categoryChild"
                  :key="child.categoryId"
                >
                  <dt>
                    <a
                      href=""
                      :data-categoryName="child.categoryName"
                      :data-categoryId="child.categoryId"
                      :data-categoryType=2
                      >{{ child.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em
                      v-for="grandChild in child.categoryChild"
                      :key="grandChild.categoryId"
                    >
                      <a
                        href=""
                        :data-categoryName="grandChild.categoryName"
                        :data-categoryId="grandChild.categoryId"
                        :data-categoryType=3
                        >{{ grandChild.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
// import { typenav } from "@api/typenav.js"; 不用vuex
import {mapState,mapActions} from  'vuex'

export default {
  name: "TypeNav",
  data() {
    return {
      // category: [],
      isHomeShow:this.$route.path == "/",
      isSearchShow:false,
    };
  },
   
   computed:{
     ...mapState({
       category:(state)=>state.home.category
     })
   },
   methods:{
     ...mapActions(['getcategory']),
     addsearch(e){
        const {categoryname,categoryid,categorytype} = e.target.dataset
        console.log(categoryname)
        if(!categoryname) return
        const location ={
          name:"search",
          query:{
            categoryName:categoryname,
            [`category${categorytype}Id`]:categoryid
          }
        };
        const {searchText} = this.$route.params
        if(searchText){
          location.params = {searchText};
        }
        if(this.$route.name === 'search'){
          this.$router.replace(location,()=>{},()=>{})
          }else{
            this.$router.push(location,()=>{},()=>{})
          }
        
     }
   },

  mounted() {
    //不用vuex
    // typenav()
    //   .then((res) => {
    //     this.category = res.slice(0, 15);
    //     console.log(this.category);
    //     // console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
       if(this.category.length) return

       
      this.getcategory()



  },
};
</script>

<style  lang="less" scoped>


      
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      // 一定要写在sort下面，否则权重不够没过渡效果
      &.navtype-enter-active {
        transition: height 0.5s;
        overflow: hidden;
      }
      &.navtype-enter {
        height: 0px;
      }


      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>

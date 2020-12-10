import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


const  Home = ()=>import('../views/Home')
const  Login = ()=>import('../views/Login')
const  Register = ()=>import('../views/Register')
const  Search = ()=>import('../views/Search')
const Detail = ()=>import('@views/Detail')
const  AddCartSuccess = ()=>import("../views/AddCartSuccess")
const  ShopCart = ()=>import("../views/ShopCart")
const Trade = ()=>import("../views/Trade")
const  Pay = ()=>import("../views/Pay")
const PaySuccess = ()=>import("../views/PaySuccess")
const  Center = ()=>import("../views/Center")






Vue.use(VueRouter)
const router = new VueRouter ({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:"/login",
            component:Login,
            meta:{
              isShow:true
            }

        },
        {
            path:"/register",
            component:Register,
            meta:{
                isShow:true
            }
        },
        {   name:'search',
            path:"/search/:searchText?",
            component:Search
        },
        {
			// 命名路由
			name: "detail",
			path: "/detail/:id",
			component: Detail,
        },
        {
			// 命名路由
			name: "addcartsuccess",
			path: "/addcartsuccess",
			component: AddCartSuccess,
		},
		{
			// 命名路由
			name: "shopcart",
			path: "/shopcart",
			component: ShopCart,
        },




        {
			path: "/trade",
			component: Trade,
        },
        {
			path: "/pay",
			component: Pay,
        },
        {
			path: "/paysuccess",
			component: PaySuccess,
        },
        {
			path: "/center/myorder",
			component: Center,
		},
    ],
    // 每次切换路由页面滚动条位置
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
})
const permissionPaths = ['/trade','/pay','/center'];//路由前置守卫白名单
router.beforeEach((to,from ,next)=>{
 if(permissionPaths.indexOf(to.path)>-1 && !store.state.user.token){
     return next('/login')
 }
 next();
})

export default router
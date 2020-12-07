import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'
import Detail from '@views/Detail'
import AddCartSuccess from "../views/AddCartSuccess";
import ShopCart from "../views/ShopCart";

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
    ],
    // 每次切换路由页面滚动条位置
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
})

export default router
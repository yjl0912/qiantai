import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'

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
        {
            path:"/search/:searchText?",
            component:Search
        }
    ]
})

export default router
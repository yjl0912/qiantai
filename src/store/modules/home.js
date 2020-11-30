import {typenav} from '../../api/typenav'

export default {
    state:{
        category: []
    },
    getters:{

    },
    actions:{
      async getcategory({commit}){
         const  category = await typenav();
         commit('GET_CATEGORY',category)

      }
    },
    mutations:{
        GET_CATEGORY(state,category){
            state.category = category;
        }
    }

}
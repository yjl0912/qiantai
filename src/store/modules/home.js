import { typenav, reqGetBanners, reqGetFloors } from "../../api/home";

export default {
  state: {
    category: [],
    banners: [],
    floors:[]
  },
  getters: {},
  actions: {
    async getcategory({ commit }) {
      const category = await typenav();
      commit("GET_CATEGORY", category);
    },
    async reqgetbanners({ commit }) {
      const banners = await reqGetBanners();
      console.log(banners);
      commit("REQGETBANNERS", banners);
    },
    async reqgetfloors({ commit }) {
      const floors = await reqGetFloors();
      commit("REQGETFLOORS", floors);
    },
  },
  mutations: {
    GET_CATEGORY(state, category) {
      state.category = category;
    },
    REQGETBANNERS(state, banners) {
      state.banners = banners;
    },
    REQGETFLOORS(state, floors) {
      state.floors = floors;
    },
  },
};

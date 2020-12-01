import { typenav, reqGetBanners, reqGetFloors } from "../../api/typenav";

export default {
  state: {
    category: [],
  },
  getters: {},
  actions: {
    async getcategory({ commit }) {
      const category = await typenav();
      commit("GET_CATEGORY", category);
    },
    async REQGETBANNERS1({ commit }) {
      const banners = await reqGetBanners();
      commit("REQGETBANNERS2", banners);
    },
    async REQGETFLOORS({ commit }) {
      const floors = await reqGetFloors();
      commit("REQGETFLOORS2", floors);
    },
  },
  mutations: {
    GET_CATEGORY(state, category) {
      state.category = category;
    },
    REQGETBANNERS2(state, banners) {
      state.banners = banners;
    },
    REQGETFLOORS2(state, floors) {
      state.floors = floors;
    },
  },
};

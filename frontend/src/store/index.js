import Vue from 'vue'
import Vuex from 'vuex'
import format from "date-fns/format";
import pt from "date-fns/locale/pt";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    date() {
      return format(new Date(), "eeee, d MMMM yyyy", {
        locale: pt
      })
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

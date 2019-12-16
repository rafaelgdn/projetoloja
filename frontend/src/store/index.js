import Vue from 'vue'
import Vuex from 'vuex'
import format from "date-fns/format";
import pt from "date-fns/locale/pt";
import { baseApiUrl } from "@/global.js";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        serviceOrder: [],
        orderStatus: {}
    },
    getters: {
        date() {
            return format(new Date(), "eeee, d MMMM yyyy", {
                locale: pt
            })
        },
        getAllOS(state) {
            return state.serviceOrder
        },
        getStatus(state) {
            return state.orderStatus
        }
    },
    mutations: {
        reloadOS(state) {
            const url = `${baseApiUrl}/service-order`;
            axios.get(url).then(res => {
                state.serviceOrder = res.data;
            });
        },
        reloadStatus(state) {
            const url = `${baseApiUrl}/status`
            axios.get(url).then(res => {
                state.orderStatus = res.data
            })
        }
    },
    actions: {

    },
    modules: {
    }
})

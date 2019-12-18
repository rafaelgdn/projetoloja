import Vue from 'vue'
import Vuex from 'vuex'
import format from "date-fns/format";
import pt from "date-fns/locale/pt";
import { baseApiUrl } from "@/global.js";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dialogRegisterOS: false,
        serviceOrder: [],
        orderStatus: {},
        editOrder: ""
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
        SetEditOrder(state, payload) {
            state.editOrder = payload
        },
        SetDialogRegisterOS(state, payload) {
            state.dialogRegisterOS = payload
        },
        reloadOS(state) {
            const url = `${baseApiUrl}/service-order`;
            axios.get(url).then(res => {
                state.serviceOrder = res.data;
            });
        },
        OrderFilters(state, payload) {
            const url = `${baseApiUrl}/order-filter`;
            axios.get(url).then(res => {
                state.serviceOrder = res.data[payload]
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

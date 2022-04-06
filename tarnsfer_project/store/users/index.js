import config from "@/config";
import axios from "axios";
/* states */

export const state = () => ({
    userLogin: null,
    userId: 0,
    key: '',
    teacher: []
});

/* getters */
export const getters = {


};


/* mutations */
export const mutations = {


    saveUser(state, data) {
        state.userLogin = data;
    },
    setUserKey(state, data) {
        state.key = data;
    },
    setUserId(state, data) {
        state.userId = data;
    },
    getTeacher(state, data) {
        state.teacher = data;
    },

};

/* actions */

export const actions = {

    saveUser({ commit }, data) {
        commit("saveUser", data);
    },
    setUserKey({ commit }, data) {
        commit("setUserKey", data);
    },
    setUserId({ commit }, data) {
        commit("setUserId", data);
    },

    getTeacher({ commit }) {
        var self = this;
        // console.log("getProduct", productSearch);

        this.$fixedKeyApi
            .get(`/profile/?role=teacher`)
            .then(response => {
                self.search = response.data;
                console.log("getTeacher", response.data);

                commit("getTeacher", response.data);
            });
    },

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
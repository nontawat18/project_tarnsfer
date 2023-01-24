import config from "@/config";
import axios from "axios";
/* states */

export const state = () => ({
    userLogin: null,
    userId: 0,
    key: '',
    teacher: [],
    profile: [],
    profileAll: [],
    committee:[]
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
    getProfile(state, data) {
        state.profile = data;
    },
    getProfileAll(state, data) {
        state.profileAll = data;
    },
    getCommittee(state, data) {
        state.committee = data;
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

    getProfile({ commit, rootState }) {
        var self = this;
        // console.log("getProduct", productSearch);
        let userID = rootState.users.userId

        this.$fixedKeyApi
            .get(`/profile/${userID}/`)
            .then(response => {
                self.search = response.data;
                console.log("getProfile", response.data);

                commit("getProfile", response.data);
            });
    },
    getProfileAll({ commit, rootState }) {
        var self = this;
        // console.log("getProduct", productSearch);
        let userID = rootState.users.userId

        this.$fixedKeyApi
            .get(`/users/`)
            .then(response => {
                self.search = response.data;
                console.log("getProfileAll", response.data);

                commit("getProfileAll", response.data);
            });
    },
    getCommittee({ commit, rootState }) {
        var self = this;
        // console.log("getProduct", productSearch);
        let userID = rootState.users.userId

        this.$fixedKeyApi
            .get(`/committee/`)
            .then(response => {
                self.search = response.data;
                console.log("getCommittee", response.data);

                commit("getCommittee", response.data);
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

// import config from "@/config";
import axios from "axios";
/* states */

export const state = () => ({
    myCourse: [],
});

/* getters */
export const getters = {


};


/* mutations */
export const mutations = {
    getMyCourse(state, data) {
        state.myCourse = {
            ...state.myCourse,
            ...data,
        };
    },
};

/* actions */

export const actions = {
    async getMyCourse({ commit }) {
        var self = this;
        // console.log("getProduct", productSearch);

        await this.$fixedKeyApi
            .get(`/my-course`)
            .then(response => {
                self.search = response.data;
                console.log("getMyCourse", response.data);

                commit("getMyCourse", response.data);
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
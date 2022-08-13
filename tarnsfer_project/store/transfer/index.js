// import config from "@/config";
import axios from "axios";
/* states */

export const state = () => ({
    equivalentCourse: [],
    equivalentCourseByID: []
});

/* getters */
export const getters = {


};


/* mutations */
export const mutations = {
    getEquivalentCourse(state, data) {
        state.equivalentCourse = {
            ...state.equivalentCourse,
            ...data,
        };
    },
    getEquivalentCourseByID(state, data) {
        state.equivalentCourseByID = {
            ...state.equivalentCourseByID,
            ...data,
        };
    },
};

/* actions */

export const actions = {
    async getEquivalentCourse({ commit }) {
        var self = this;
        // console.log("getProduct", productSearch);

        await this.$fixedKeyApi
            .get(`/equivalent-course/`)
            .then(response => {
                self.search = response.data;
                console.log("getEquivalentCourse", response.data);

                commit("getEquivalentCourse", response.data);
            });
    },

    async getEquivalentCourseByID({ commit }, { id }) {
        var self = this;
        // console.log("getProduct", productSearch);

        await this.$fixedKeyApi
            .get(`/equivalent-course/${id}/`)
            .then(response => {
                self.search = response.data;
                console.log("getEquivalentCourseByID", response.data);

                commit("getEquivalentCourseByID", response.data);
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
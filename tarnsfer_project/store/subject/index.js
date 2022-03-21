// import config from "@/config";
import axios from "axios";
/* states */

export const state = () => ({
    myCourse: [],
    schoolCourse: []
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
    getSchoolCourse(state, data) {
        state.schoolCourse = {
            ...state.schoolCourse,
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
    async getSchoolCourse({ commit }) {
        var self = this;
        // console.log("getProduct", productSearch);

        await this.$fixedKeyApi
            .get(`/school-course`)
            .then(response => {
                self.search = response.data;
                console.log("getSchoolCourse", response.data);

                commit("getSchoolCourse", response.data);
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
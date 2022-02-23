import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
    createPersistedState({
        key: "web_liff",
        paths: ["subject"]
    })(store);
};
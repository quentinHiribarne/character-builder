const state = {
    uid: "",
    username: "",
    email: "",
};

const mutations = {
    setUserUid(state, payload) {
        console.log(payload);
        state.uid = payload;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};

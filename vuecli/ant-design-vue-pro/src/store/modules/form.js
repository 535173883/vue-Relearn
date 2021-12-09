// import request from "../../utils/request";
import router from "../../router/index";

const state = {
  step: {
    payAccount: "123456",
  },
};

const actions = {
  async submitStepForm({ commit }, payload) {
    // await request({
    //   url: "/api/forms",
    //   method: "POST",
    //   data: payload.payload,
    // });
    await Promise.resolve("success");
    commit("saveStepFormData", { payload });
    router.push("/form/step-form/result");
  },
};

const mutations = {
  saveStepFormData(state, { payload }) {
    state.step = {
      ...state.step,
      ...payload,
    };
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

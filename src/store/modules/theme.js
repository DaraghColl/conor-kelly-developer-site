const state = {
  theme: localStorage.theme ? localStorage.theme : 'theme--dark',
};

const getters = {
  theme: (state) => state.theme,
};

const actions = {
  toggleTheme({ commit }, theme) {
    commit('setThemeState', theme);
    localStorage.setItem('theme', theme);
  },
};

const mutations = {
  setThemeState: (state, theme) => (state.theme = theme),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

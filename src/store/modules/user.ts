import { MutationTree, ActionTree, GetterTree } from 'vuex';
interface UserState {
  userInfo: any;
}
interface RootState {}
const state: UserState = {
  // 用户信息
  userInfo: {
    name: '管理员用户',
  },
};
const getters: GetterTree<UserState, RootState> = {
  getterName(state: any) {
    return `这是我的账号名称：${state.userInfo.name}`;
  },
};
const mutations: MutationTree<UserState> = {
  SET_USER_INFO(state: any, val: any) {
    state.userInfo = val;
  },
  SET_ROLE(state: any, val: number | string) {
    state.role = val;
  },
};
const actions: ActionTree<UserState, RootState> = {
  GET_USER_INFO({ commit }) {
    setTimeout(() => {
      commit('SET_USER_INFO', { name: '这是从接口获取来的名称' });
    }, 3000);
  },
};

export default { namespaced: 'user', state, mutations, actions, getters };

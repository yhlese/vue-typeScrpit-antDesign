import { MutationTree, ActionTree } from 'vuex';

interface UserState {
  userInfo: any;
  role: number | string;
}
interface RootState {}

const state: UserState = {
  // 用户信息
  userInfo: {},
  // 登录角色
  role: 1,
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
  SET_LOGOUT({ commit }, hasConfirm: boolean = true) {
    console.log(commit);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

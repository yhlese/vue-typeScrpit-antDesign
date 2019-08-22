/**
 * @description：用户登录角色
 * */
const userRoleConfig: any = {
  companyUser: {
    key: 'companyUser',
    value: '1',
    routerLoginName: 'companyLogin',
    sysPlat: 'company',
    label: '用户1',
    channel: '1',
  },
  factoryUser: {
    key: 'factoryUser',
    value: '0',
    routerLoginName: 'factoryLogin',
    sysPlat: 'factory',
    label: '用户0',
    channel: '0',
  },
  agentUser: {
    key: 'agentUser',
    value: '2',
    routerLoginName: 'agentLogin',
    sysPlat: 'agent',
    label: '用户2',
    channel: '2',
  },
};
export { userRoleConfig };

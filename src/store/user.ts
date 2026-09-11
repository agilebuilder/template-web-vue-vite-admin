import { defineStore } from 'pinia'

export interface UserInfo {
  name: string
  roles: string[]
  permissions: string[]
}

interface UserState {
  token: string
  userInfo: UserInfo | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: localStorage.getItem('token') ?? '',
    userInfo: null,
  }),
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    permissions: (state) => state.userInfo?.permissions ?? [],
  },
  actions: {
    /**
     * 登录示例：真实项目应调用 `utils/request` 封装的接口，
     * 这里用本地模拟数据演示状态流转。
     */
    async login(username: string, _password: string) {
      this.token = `mock-token-${Date.now()}`
      this.userInfo = {
        name: username,
        roles: ['admin'],
        permissions: ['user:create', 'user:delete'],
      }
      localStorage.setItem('token', this.token)
    },
    logout() {
      this.token = ''
      this.userInfo = null
      localStorage.removeItem('token')
    },
    hasPermission(permission: string) {
      return this.permissions.includes(permission)
    },
  },
})

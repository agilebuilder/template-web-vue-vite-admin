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
     * Login example: a real project should call the API through the
     * `utils/request` wrapper; local mock data is used here to demonstrate
     * the state transitions.
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

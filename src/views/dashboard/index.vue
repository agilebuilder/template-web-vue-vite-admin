<template>
  <div>
    <el-card>
      <template #header>Welcome to {{ title }}</template>
      <p>Login status: {{ userStore.isLoggedIn ? 'Logged in' : 'Not logged in' }}</p>
      <p v-if="userStore.userInfo">Permissions: {{ userStore.permissions.join(', ') }}</p>
      <el-space wrap>
        <el-button v-if="!userStore.isLoggedIn" type="primary" @click="handleLogin">
          Mock Login
        </el-button>
        <el-button v-permission="'user:create'" type="success">Create User (requires user:create)</el-button>
        <el-button v-permission="'system:config'" type="warning">
          System Settings (requires system:config; removed without permission)
        </el-button>
      </el-space>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const title = import.meta.env.VITE_APP_TITLE

function handleLogin() {
  userStore.login('admin', '123456')
}
</script>

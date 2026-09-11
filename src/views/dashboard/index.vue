<template>
  <div>
    <el-card>
      <template #header>欢迎使用 {{ title }}</template>
      <p>当前登录状态：{{ userStore.isLoggedIn ? '已登录' : '未登录' }}</p>
      <p v-if="userStore.userInfo">权限点：{{ userStore.permissions.join('、') }}</p>
      <el-space wrap>
        <el-button v-if="!userStore.isLoggedIn" type="primary" @click="handleLogin">
          模拟登录
        </el-button>
        <el-button v-permission="'user:create'" type="success">新增用户（需 user:create）</el-button>
        <el-button v-permission="'system:config'" type="warning">
          系统配置（需 system:config，无权限时被移除）
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

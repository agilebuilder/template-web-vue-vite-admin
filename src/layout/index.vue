<template>
  <el-container class="app-layout">
    <el-aside width="220px" class="app-aside">
      <div class="app-logo">{{ title }}</div>
      <el-menu :default-active="activeMenu" router class="app-menu">
        <el-menu-item index="/dashboard">
          <span>工作台</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <span>关于</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="app-header">
        <span class="app-header__title">{{ route.meta.title }}</span>
        <el-dropdown @command="handleCommand">
          <span class="app-header__user">
            {{ userStore.userInfo?.name ?? '未登录' }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-if="!userStore.isLoggedIn" command="login">
                模拟登录
              </el-dropdown-item>
              <el-dropdown-item v-else command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>

      <el-main class="app-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useUserStore } from '@/store/user'

const route = useRoute()
const userStore = useUserStore()

const title = import.meta.env.VITE_APP_TITLE
const activeMenu = computed(() => route.path)

function handleCommand(command: string) {
  if (command === 'login') {
    userStore.login('admin', '123456')
  } else if (command === 'logout') {
    userStore.logout()
  }
}
</script>

<style scoped>
.app-layout {
  height: 100vh;
}

.app-aside {
  background-color: #304156;
}

.app-logo {
  height: 60px;
  line-height: 60px;
  padding: 0 16px;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.app-menu {
  border-right: none;
  background-color: transparent;
}

.app-menu :deep(.el-menu-item) {
  color: #bfcbd9;
}

.app-menu :deep(.el-menu-item.is-active),
.app-menu :deep(.el-menu-item:hover) {
  color: #fff;
  background-color: #263445;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e4e7ed;
}

.app-header__title {
  font-size: 16px;
  font-weight: 600;
}

.app-header__user {
  cursor: pointer;
  color: #409eff;
}

.app-main {
  background-color: #f5f7fa;
}
</style>

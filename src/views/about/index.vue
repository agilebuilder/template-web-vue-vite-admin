<template>
  <el-card>
    <template #header>About</template>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="App Name">{{ title }}</el-descriptions-item>
      <el-descriptions-item label="API Base URL">{{ apiBaseUrl }}</el-descriptions-item>
      <el-descriptions-item label="Tech Stack">
        Vue3 + Vite + TypeScript + Pinia + Vue Router + Element Plus
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
</script>

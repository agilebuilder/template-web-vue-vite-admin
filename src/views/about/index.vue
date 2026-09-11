<template>
  <el-card>
    <template #header>关于</template>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="应用名称">{{ title }}</el-descriptions-item>
      <el-descriptions-item label="接口地址">{{ apiBaseUrl }}</el-descriptions-item>
      <el-descriptions-item label="技术栈">
        Vue3 + Vite + TypeScript + Pinia + Vue Router + Element Plus
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
</script>

import type { Directive } from 'vue'

import { useUserStore } from '@/store/user'

/**
 * v-permission 权限指令示例：
 *   <el-button v-permission="'user:create'">新增</el-button>
 *   <el-button v-permission="['user:create', 'user:update']">新增或编辑</el-button>
 * 当前用户不具备任一所需权限点时，直接移除该元素。
 */
const permission: Directive<HTMLElement, string | string[]> = {
  mounted(el, binding) {
    const userStore = useUserStore()
    const required = Array.isArray(binding.value) ? binding.value : [binding.value]
    const allowed = required.some((item) => userStore.permissions.includes(item))
    if (!allowed) {
      el.parentNode?.removeChild(el)
    }
  },
}

export default permission

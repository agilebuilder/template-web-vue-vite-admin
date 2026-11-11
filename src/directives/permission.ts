import type { Directive } from 'vue'

import { useUserStore } from '@/store/user'

/**
 * v-permission directive example:
 *   <el-button v-permission="'user:create'">Create</el-button>
 *   <el-button v-permission="['user:create', 'user:update']">Create or Edit</el-button>
 * The element is removed when the current user lacks any of the required permissions.
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

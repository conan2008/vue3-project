<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { getUser } from '@/api/test'
import { Message } from '@/components/Message'

export default defineComponent({
  setup() {
    onMounted(async () => {
      console.log(process.env.VUE_APP_CURENV)
      const res = await getUser()
      Message.success('nice')
    })
  }
})
</script>

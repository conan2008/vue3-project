<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
// import { getUser } from '@/api/test'
import { Message } from '@/components/Message'
import { dispatchAction } from '@/store/utils'
import { Test1ActionsType } from '@/store/modules/test1/actions'

export default defineComponent({
  setup() {
    onMounted(async () => {
      console.log(process.env.VUE_APP_CURENV)
      // const res = await getUser()
      const res = await dispatchAction<Test1ActionsType>(
        'test1',
        'getData',
        '123',
        true
      )
      Message.success(res.message)
    })
  }
})
</script>

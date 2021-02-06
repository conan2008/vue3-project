import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registeGlobalComponent } from '@/components'

const app = createApp(App)

registeGlobalComponent(app)

app
  .use(store)
  .use(router)
  .mount('#app')

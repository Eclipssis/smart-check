import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/main.css'

import VueCountdown from '@chenfengyuan/vue-countdown'

const app = createApp(App).use(store).use(router)
app.component(VueCountdown.name, VueCountdown)
app.mount('#app')

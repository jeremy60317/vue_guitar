import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.scss'

createApp(App).use(createPinia())
createApp(App).mount('#app')

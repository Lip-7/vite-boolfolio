import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'
import './assets/main.css'

createApp(App).use(router).mount('#app')

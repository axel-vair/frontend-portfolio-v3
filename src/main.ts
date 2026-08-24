import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { vReveal } from '@/directives/reveal'

const app = createApp(App)

app.directive('reveal', vReveal)
app.use(createPinia())
app.use(router)

app.mount('#app')

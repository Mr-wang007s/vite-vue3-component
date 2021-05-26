import { createApp } from 'vue'
import App from './App.vue'
import W from 'wei-ui'
import '../packages/theme-chalk/src/index.scss'


const app = createApp(App)
app.use(W)
app.mount('#app')
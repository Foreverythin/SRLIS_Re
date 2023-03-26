import { createApp } from 'vue'
import ArcoVue from "@arco-design/web-vue"
import App from './App.vue'
import router from './router/index'
import './style.css'
import '@arco-design/web-vue/dist/arco.css'

createApp(App).use(router).use(ArcoVue).mount('#app')

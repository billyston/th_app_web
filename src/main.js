import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import axios from "axios"
axios.defaults.baseURL = "http://localhost:8016/api/";

createApp(App).use(router).mount('#app')

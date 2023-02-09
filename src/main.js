import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"
import axios from 'axios'
import config from './assets/js/config'


createApp(App)
    .use(router, axios)
    .use(config)
    .mount('#app')
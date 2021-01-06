import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from "./font-awesome.ts";


import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).use(router).component("fa", FontAwesomeIcon).mount('#app')

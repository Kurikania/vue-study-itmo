import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from "./font-awesome.ts";

import  firebase  from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB_9fVifyzeAZQt6OXUmdQwXCtj8U7zbaw",
    authDomain: "vue-cart-99669.firebaseapp.com",
    projectId: "vue-cart-99669",
    storageBucket: "vue-cart-99669.appspot.com",
    messagingSenderId: "829681915292",
    appId: "1:829681915292:web:cf39581609f410773c2459"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();


import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).use(router).component("fa", FontAwesomeIcon).mount('#app')

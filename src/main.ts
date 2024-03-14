import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {FaSpinner } from "oh-vue-icons/icons";

addIcons(FaSpinner);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-icon', OhVueIcon);

app.mount('#app')

import './assets/main.css'
import './assets/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@/plugins/FontAwesome'
import VueGtagPlugin from 'vue-gtag'

import App from './App.vue'
import router from './router'
import * as process from 'node:process'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGtagPlugin, {
  config: { id: process.env.VUE_APP_METRIC_ID },
  pageTrackerScreenView: true,
});


app.mount('#app')

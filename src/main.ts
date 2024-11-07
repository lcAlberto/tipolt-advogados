import './assets/main.css'
import './assets/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@/plugins/FontAwesome'
import VueGtagPlugin from 'vue-gtag'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGtagPlugin, {
  config: { id: import.meta.env.VITE_METRIC_ID },
  pageTrackerScreenviewEnabled: true,
});


app.mount('#app')

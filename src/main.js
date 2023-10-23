import './assets/main.css'
import store from './store'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from './fontawesome'

let app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store)
app.mount('#app')

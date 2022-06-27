import { createApp } from 'vue'
import bootstrap from './bootstrap'

// BootStrap
bootstrap()

// Components
import Welcome from './components/view/welcome/Index.vue'

// Vue App
const app = createApp({})
app.component('Welcome', Welcome)
app.mount('#app')


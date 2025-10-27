import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from '@/app.vue'
import router from './router'
import store from './store'

// Add FontAwesome icons to library
library.add(faSync, faExclamationTriangle)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)

app.mount('#app')

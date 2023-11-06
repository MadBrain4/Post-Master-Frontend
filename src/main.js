import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

//Messages
import { messages } from '@/lang/messages'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)


const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(pinia)
app.mount('#app')

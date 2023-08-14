
import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Home from './Pages/Home.vue'
import Vacancies from './Pages/Vacancies.vue'


const routes = [
    { path: '/', component: Home    },
    { path: '/vacancies', component: Vacancies}
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)

app.mount('#app')
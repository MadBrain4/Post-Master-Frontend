import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '@/store/authStore'

class AuthService {
    constructor () {
        this.user = ref({})
        this.jwt = ref('')
        this.errors = ref({})
    }

    getUser () {
        return this.user
    }

    getJwt () {
        return this.jwt
    }

    getErrors () {
        return this.errors
    }

    async login (email, password) {
        const url = 'http://127.0.0.1:8000/api/login'
        const params = {
            email,
            password
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const res = await axios.post(url, params, config)
        const response = res.data

        const authStore = useAuthStore()

        if (response.errors !== undefined) {
            authStore.errors = response.errors
            return false
        } 

        authStore.user = response.data
        authStore.jwt = response.access_token
        return true
    }
}

export default AuthService
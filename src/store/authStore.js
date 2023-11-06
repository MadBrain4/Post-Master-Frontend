import { defineStore } from 'pinia'

export const useAuthStore = defineStore('Auth', {
    state: () => {
        return {
            jwt: '',
            user: {},
            errors: {}
        }
    },
    persist: {
        storage: sessionStorage,
        paths: ['jwt', 'user']
    }
})
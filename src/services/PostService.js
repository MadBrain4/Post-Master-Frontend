import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '@/store/authStore'

class PostService {
    constructor () {
        this.posts = ref([])
        this.post = ref({})
    }

    getPosts () {
        return this.posts
    }

    getPost () {
        return this.post
    }

    async fetchPosts () {
        const authStore = useAuthStore()
        const url = 'http://127.0.0.1:8000/api/posts'
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authStore.jwt}`
            }
        }
        const res = await axios.get(url, config)
        const response = res.data
        this.posts.value = response.data
        return true
    }

    async fetchPost (id) {
        const authStore = useAuthStore()
        const url = `http://127.0.0.1:8000/api/posts/${id}`
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authStore.jwt}`
            }
        }
        const res = await axios.get(url, config)
        const response = res.data
        this.post.value = response.data
        return true
    }
}

export default PostService


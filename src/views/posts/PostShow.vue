<template>
    <div class="post">
        <MainLayout>
            <template v-slot:main>
                <router-link :to="{name: 'posts'}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >Volver Atras</router-link>
            
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ post.title }}</td>
                            <td>{{ post.content }}</td>
                            <td>{{ post.user }}</td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </MainLayout>
    </div>
</template>

<script setup>
    import MainLayout from '@/layouts/MainLayout.vue';
    import PostService from '@/services/PostService';
    import { useRoute } from 'vue-router';
    import { onBeforeMount } from 'vue'

    const service = new PostService()
    const post = service.getPost()

    onBeforeMount(async () => {
        const route = useRoute()
        const id = route.params.id
        await service.fetchPost(id)
    })
</script>
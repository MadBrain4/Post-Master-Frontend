<template>
    <div class="posts">
      <MainLayout>
        <template v-slot:main >
          <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id" >
                        <td>{{ post.title }}</td>
                        <td>{{ post.content }}</td>
                        <td>{{ post.user.name }}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </template>
      </MainLayout>
    </div>
  </template>
  
  <script setup>
    import MainLayout from '@/layouts/MainLayout.vue';
    import PostService from '@/services/PostService';
    import { onMounted } from 'vue'

    const service = new PostService()
    const posts = service.getPosts()

    onMounted(async () => {
        const success = await service.fetchPosts()
        console.log(success)
        console.log(posts.value)
    })
    
  </script>
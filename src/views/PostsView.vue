<template>
    <div class="posts">
      <MainLayout>
        <template v-slot:main >
          <div>
            <h1>Post List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>User</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id" >
                        <td>{{ post.title }}</td>
                        <td>{{ post.content }}</td>
                        <td>{{ post.user.name }}</td>
                        <td>
                          <router-link :to="{name: 'postShow', params: {
                            'id': post.id
                          }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Show</router-link>
                        </td>
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
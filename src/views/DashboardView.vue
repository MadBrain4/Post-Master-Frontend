<template>
    <div class="home">
      <MainLayout>
        <template v-slot:main >
          <div>
            <h3>Dashboard</h3>
          </div>
        </template>
      </MainLayout>
    </div>
  </template>
  
  <script setup>
    import MainLayout from '@/layouts/MainLayout.vue';
  </script>
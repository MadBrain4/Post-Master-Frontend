<template>
    <div class="home">
      <MainLayout>
        <template v-slot:main >
          <div>
            Dashboard
          </div>
        </template>
      </MainLayout>
    </div>
  </template>
  
  <script setup>
    import MainLayout from '@/layouts/MainLayout.vue';
  </script>
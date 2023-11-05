<template>
  <div class="home">
    <MainLayout>
      <template v-slot:main >
        <div>
          This is an about page
        </div>
      </template>
    </MainLayout>
  </div>
</template>

<script setup>
  import MainLayout from '@/layouts/MainLayout.vue';
</script>

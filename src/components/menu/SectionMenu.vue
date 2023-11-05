<template>
    <li>
        <router-link :to="{name: props.name}" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >{{ props.section }}</router-link>
    </li>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        section: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    })
</script>
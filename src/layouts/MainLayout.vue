<template>
    <div>
        <div>
            <MainMenu />
        </div>
        <slot name="main" ></slot>
    </div>
</template>

<script setup>
    import MainMenu from "@/components/MainMenu.vue";

</script>
<template>
    <header>
        <div class="col-md-12 text-center">
            <h1>Home page</h1>
            <h1 v-if="authStore.user">Hello:{{ authStore.user.name }}</h1>




        </div>
    </header>
</template>

<script setup>

import { useAuthStore } from '../stores/Auth.js';


const authStore = useAuthStore();
// onMounted(()=>{
//     authStore.getUser();
// })
//  replace with auth:true in router







</script>

<style scoped></style>

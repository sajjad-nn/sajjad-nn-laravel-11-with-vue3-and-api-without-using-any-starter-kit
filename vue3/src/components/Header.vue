<template>
    <div>
        <nav class="navbar navbar-expand-lg opacity-75 bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Template</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>



                        <li class="nav-item" v-if="authStore.user">
                            <router-link class="nav-link" to="/post">post</router-link>
                        </li>

                    </ul>

                    <ul class="navbar-nav  rounded-1   gap-1   mb-2 mb-lg-0" v-if="authStore.user">


                        <li class="nav-item mt-2 ">
                            <p > welcome: {{ authStore.user.name }}</p>

                        </li>

                        <li class="nav-item ms-1">
                            <form @submit.prevent="authStore.logout">
                                <button class="btn btn-danger" type="submit">logOut</button>
                            </form>
                        </li>
                    </ul>
                    <ul v-else class="navbar-nav rounded-1 mb-1 g-5">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>


                        </li>

                    </ul>


                </div>
            </div>
        </nav>

    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/Auth';
const authStore = useAuthStore()


</script>

<style lang="scss" scoped></style>

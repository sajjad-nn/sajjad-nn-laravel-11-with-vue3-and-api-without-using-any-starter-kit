<template>
    <div>
        <h1>Login page</h1>
        <section class="bg-light p-3 p-md-4 p-xl-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <div class="card border-0 shadow-sm rounded-4">
                            <div class="card-body p-3 p-md-4 p-xl-5">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-5">
                                            <h3>Log in</h3>
                                        </div>
                                    </div>
                                </div>

                                <form @submit.prevent="Handler('login',form)">
                                    <div class="row gy-3 overflow-hidden">
                                        <div class="col-12">
                                            <div class="form-floating mb-3">
                                                <input type="email" v-model="form.email" class="form-control"
                                                    name="email" id="email"  >
                                                <label for="email" class="form-label">Email</label>
                                                <p v-if="errors.email" class="form-text text-danger">{{
                                                    errors.email[0] }}</p>







                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating mb-3">
                                                <input type="password" v-model="form.password" class="form-control"
                                                    name="password" id="password" value="" >

                                                <label for="password" class="form-label">Password</label>
                                                <p v-if="errors.password" class="form-text text-danger">{{
                                                    errors.password[0] }}</p>






                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    name="remember_me" id="remember_me">
                                                <label class="form-check-label text-secondary" for="remember_me">

                                                    Keep me logged in
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button class="btn bsb-btn-2xl btn-primary" type="submit">

                                                    Log in now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div class="row">
                                    <div class="col-12">
                                        <hr class="mt-5 mb-4 border-secondary-subtle">
                                        <div
                                            class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                            <p>Don't have an account?<router-link to="/register">sing up</router-link>
                                            </p>
                                            <a href="#!" class="link-secondary text-decoration-none">Forgot password</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

import { useAuthStore } from '../stores/Auth.js';
import { storeToRefs } from 'pinia';


const { Handler } = useAuthStore();
// const authStore = useAuthStore();
const {errors}=storeToRefs(useAuthStore());

const form = reactive({
    email: '',
    password: ''

})

onMounted(()=>{errors.value={}})

</script>

<style lang="scss" scoped></style>

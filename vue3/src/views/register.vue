<template>
    <div>
        <h1 class="">Register page:</h1>

        <section class="bg-light p-3 p-md-4 p-xl-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <div class="card border border-light-subtle rounded-4">
                            <div class="card-body p-3 p-md-4 p-xl-5">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-5">
                                            <div class="text-center mb-4">
                                                <a href="#!">
                                                    <img src="https://t4.ftcdn.net/jpg/03/50/22/09/360_F_350220944_eP86k7gETH89ThASGNnwL3JS2X6Uh8yB.jpg"
                                                        alt="BootstrapBrain Logo" width="175" height="57">
                                                </a>
                                            </div>
                                            <h2 class="h4 text-center">Registration</h2>
                                            <h3 class="fs-6 fw-normal text-secondary text-center m-0">Enter your details
                                                to register</h3>
                                        </div>
                                    </div>
                                </div>
                                <form @submit.prevent="Handler('register',form)">

                                    <div class="row gy-3 overflow-hidden">
                                        <div class="col-12">
                                            <div class="form-floating mb-3">
                                                <input type="text" v-model="form.name" class="form-control"
                                                    name="firstName" id="firstName" placeholder="Name" >
                                                    <p v-if="errors.name"  class="form-text text-danger">{{ errors.name[0] }}</p>
                                                <label for="firstName" class="form-label"> Name</label>

                                            </div>

                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="email" v-model="form.email" class="form-control"
                                                        name="email" id="email"  >
                                                        <p v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</p>
                                                    <label for="email" class="form-label">Email</label>

                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="password" v-model="form.password" class="form-control"
                                                        name="password" value="" >
                                                        <p v-if="errors.password"  class="form-text text-danger">{{ errors.password[0] }}</p>
                                                    <label for="password" class="form-label">Password</label>

                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="password" v-model="form.password_confirmation"
                                                        class="form-control" name="password" value=""
                                                        placeholder="Password" >
                                                        <p v-if="errors.password_confirmation"  class="form-text text-danger">{{ errors.password_confirmation[0] }}</p>
                                                    <label for="password" class="form-label"> confirm Password</label>

                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button class="btn bsb-btn-xl btn-primary" type="submit">Sign
                                                        up</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div class="row">
                                    <div class="col-12">
                                        <hr class="mt-5 mb-4 border-secondary-subtle">
                                        <p class="m-0 text-secondary text-center">Already have an account?
                                            <router-link :to="{ name: 'login' }">sign in</router-link>
                                        </p>
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

import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/Auth.js';
import { onMounted, reactive } from 'vue';

const {Handler} =useAuthStore();
// const authStore=useAuthStore();  the same with down page
const {errors}=storeToRefs(useAuthStore())



const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',

});

onMounted(()=>{errors.value={}})

// const Handleregister = (form) => {
//     authStore.authRegister('register', form)
// }




</script>

<style lang="scss" scoped></style>

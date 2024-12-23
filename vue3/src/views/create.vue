<template>
    <div>
        <section class="bg-light p-3 p-md-4 p-xl-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <div class="card border-0  shadow-sm rounded-4">
                            <div class="card-body p-3 p-md-4 p-xl-5">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-5">
                                            <h3>create post:</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <form @submit.prevent="createPost(form)">
                                <div class="card-body">
                                    <div class="row gy-3 overflow-hidden">
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <div class="mt-2 text-danger" v-if="errors.body">{{ errors.body[0] }}</div>
                                            <input type="text" v-model="form.body" class="form-control" name="body"
                                                id="body" placeholder="body">


                                            <label for="body" class="form-label"> body:</label>






                                        </div>
                                    </div>


                                </div>

                                <div class="col-12">
                                    <div class="form-floating mb-3">
                                        <div class="mt-2 text-danger" v-if="errors.title">{{ errors.title[0] }}</div>

                                        <input type="text" v-model="form.title" class="form-control" name="title"
                                            id="password" value="" placeholder="title">

                                        <label for="title" class="form-label">title:</label>





                                    </div>

                                </div>

                                <div class="col-12">
                                    <!-- <label for="image" class="form-label"> image:</label>
                                    <div class="form-floating mb-3">
                                        <div class="mt-2 text-danger" v-if="errors.image">{{ errors.image[0] }}

                                            </div>
                                        <input type="file" @change="img" name="image" class="form-control" id="image"  >









                                    </div> -->

                                    <div class="col-3 mx-auto mb-1 ">
                                        <div class="d-flex">
                                            <button class="btn bsb-btn-2xl btn-primary" type="submit">create </button>







                                        </div>
                                    </div>








                                </div>
                                </div>



                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post.js';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
const { createPost } = usePostStore()
const form = reactive({
    body: '',
    title: '',



});
const { errors } = storeToRefs(usePostStore())

</script>

<style lang="scss" scoped></style>

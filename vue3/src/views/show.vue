<template>
    <div>
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5>post</h5>
                <router-link class="btn bsb-btn-2xl btn-primary" to="/post">Back</router-link>
            </div>
            <div class="card-body" v-if="post">
                <table class="table table-striped align-middle">
                    <thead>
                        <tr>
                            <th>body</th>
                            <th>Title</th>
                            <th>owner</th>
                            <th>action</th>


                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{{ post.body }}</td>
                            <td>{{ post.title }} </td>
                            <td>{{ post.user.name }}</td>
                            <td v-if="authStore.user && authStore.user.id === post.user_id" class="d-flex gap-1">
                                <form @submit.prevent="deletePost(post)">
                                    <button class="btn btn-sm btn-outline-danger">delete</button>
                                </form>

                                <router-link :to="{ name: 'update', params: { id: post.id } }"> <button
                                        class="btn btn-sm btn-outline-info">edit</button></router-link>




                            </td>
                            <td v-else>
                                <p>you do not own this post</p>
                            </td>



                        </tr>


                    </tbody>
                </table>



            </div>
            <div v-else>
                <h2 class="text-danger col-md-12 text-center">page not found </h2>

            </div>

        </div>







    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/Auth';
import { usePostStore } from '@/stores/post';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const authStore = useAuthStore()
const route = useRoute()
const post = ref(null)
const { getPost, deletePost } = usePostStore()
onMounted(async () => (post.value = await getPost(route.params.id)))

</script>

<style lang="scss" scoped></style>

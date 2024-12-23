<template>
    <div>


        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5>posts</h5>
                <router-link class="btn bsb-btn-2xl btn-primary" to="/createpost">create post</router-link>
            </div>
            <div class="card-body" v-if="posts.length > 0">
                <table class="table table-striped align-middle">
                    <thead>
                        <tr>
                            <th>body</th>
                            <th>Title</th>
                            <th>owner</th>


                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="post in posts " :key="post.id">
                            <td>{{ post.body }}</td>
                            <td>{{ post.title }}
                                <router-link :to="{ name: 'show', params: { id: post.id } }"
                                    class="text-blue font-bold underline">more...</router-link>
                            </td>
                            <td>{{ post.user.name }}</td>



                        </tr>


                    </tbody>
                </table>



            </div>
            <div v-else>
                <h2 class="text-danger col-md-12 text-center">there is no post </h2>

            </div>

        </div>






    </div>
</template>

<script setup>
import { usePostStore } from '@/stores/post';
import { onMounted, ref } from 'vue';

const posts = ref([]);
const { getAllPosts } = usePostStore();

onMounted(async () => (posts.value = await getAllPosts()));

</script>

<style lang="scss" scoped></style>

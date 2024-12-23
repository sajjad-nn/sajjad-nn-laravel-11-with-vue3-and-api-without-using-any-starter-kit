import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { useAuthStore } from "./Auth";

export const usePostStore = defineStore("postStore", {
    state: () => {
        return {
            errors: {},
            data: "",
        };
    },
    actions: {
        async getAllPosts() {
            const rsp = await fetch("/api/post", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await rsp.json();
            console.log(data);
            return data;
        },

        async getPost(post) {
            const rsp = await fetch(`/api/post/${post}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await rsp.json();
            console.log(data);
            return data.post;
        },

        async createPost(form) {
            const res = await fetch("/api/post", {
                method: "post",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            //    console.log(data);
            if (data.errors) {
                this.errors = data.errors;
            } else {
                // console.log(data)
                // this.errors = {};
                Swal.fire({
                    title: "post created successfully",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: "top",
                });
                this.router.push("/post");
            }
        },

        /****delete post ******/
        async deletePost(post) {
            const authStore=useAuthStore()
            if (authStore.user.id===post.user_id) {
                const res = await fetch(`/api/post/${post.id}`, {
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const data = await res.json();
                console.log(data);
                if (res.ok) {
                    Swal.fire({
                        title: "post delete successfully",
                        icon: "warning",
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 3000,
                        toast: true,
                        position: "top",
                    });
                    this.router.push("/post");

                }else{
                    console.log(data)
                }
            }else{
                console.log('you do not own this post')
            }

        },

        async updatePost(post,form) {
            const authStore=useAuthStore()
            if (authStore.user.id===post.user_id) {
                const res = await fetch(`/api/post/${post.id}`, {
                    method: "put",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body:JSON.stringify(form)
                });
                const data = await res.json();
                console.log(data);
                if (data.errors) {
                    this.errors=data.errors


                }else{
                    Swal.fire({
                        title: "post update successfully",
                        icon: "info",
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 3000,
                        toast: true,
                        position: "top",
                    });
                    this.router.push("/post");
                    this.errors={}
                }
            }

        },
    },
});

import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";



export const useAuthStore = defineStore("authStore",{
    state:()=>{
        return{
            user:null,
            errors:{}
        }
    },

        actions:{
            // *****  get authenticate user ****/
            async getUser(){
                if(localStorage.getItem('token')){
                    const res= await fetch('/api/user',{
                        headers:{
                            authorization:`Bearer ${localStorage.getItem('token')}`
                        },
                    });
                    const data =await res.json();
                    if (res.ok) {
                        this.user=data;
                      

                    }
                }
            },



            /****login and register user ******/
           async Handler(apiRoute,form){
            const res=await fetch(`/api/${apiRoute}`,{
                    method:'post',
                    body:JSON.stringify(form),
                });
                const data =await res.json()
                if(data.errors){
                    this.errors=data.errors

                }else{
                    // console.log(data);
                    this.errors={}
                    Swal.fire({
                        title: "Welcome",
                        icon: "success",
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 3000,
                        toast: true,
                        position: 'top',
                    });
                    localStorage.setItem('token',data.token);
                    this.user=data.user;
                    this.router.push('/');
                    // this.router.push({name:"home"});

                }


            },

               /****logOut user ******/


               async logout(){

                const res=await fetch('/api/logOut',{
                    method:'post',
                    headers:{
                        authorization:`Bearer ${localStorage.getItem("token")}`,
                    }
                })

                const data=await res.json();
                console.log(data);
                if (res.ok) {
                    this.user=null
                    this.errors={}
                    localStorage.removeItem('token')
                    this.router.push('/');

                }
               },


        }






})




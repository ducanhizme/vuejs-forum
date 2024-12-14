import {defineStore} from "pinia";
import {apiHandler} from "@/api/apiHandler.js";
import {authService} from "@/api/service/authService.js";
import router from "@/router/index.js";

export const useAuthStore = defineStore('auth-store',{
    state:()=>{
        return {
            user:{}
        }
    },
    getters:{
        isAuthenticated:(state)=> !!state.user,
        user:(state)=> state.user,
    },
    actions:{
        setUser(user){
            this.user = user;
        },
        async login(credentials) {
            await apiHandler( ()=>authService.login(credentials),{
                successMessage:'Login Success',
                onSuccess:(response)=>{
                    this.setUser(response.data);
                }
            })
        },
        async register(credentials) {
            await apiHandler( ()=>authService.register(credentials),{
                successMessage:'Register Success',
                onSuccess:(response)=>{
                    setTimeout(()=>{
                        router.push({name:'Login'})
                    },1300)

                }
            })
        }
    }
})
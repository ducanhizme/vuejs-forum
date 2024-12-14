import {defineStore} from "pinia";

export const useEntityStore = defineStore('entity', {
    state: () => ({
        error: null,
        loading: false,
        success: null,
        message: null,
    }),
    getters:{
        getError:(state)=> state.error,
        getLoading:(state)=> state.loading,
        getSuccess:(state)=> state.success,
        getMessage:(state)=> state.message,
    },
    actions:{
        setError(error){
            console.log(error);
            this.error = error;
        },
        setLoading(loading){
            this.loading = loading;
        },
        setSuccess(success){
            console.log('success', success)
            this.success = success;
        },
        setMessage(message){
            console.log(message);
            this.message = message;
        }
    }
})
import {useEntityStore} from "@/store/entityStore.js";

export async function apiHandler(callback, options = {}) {
    const {
        onSuccess,
        successMessage,
    } = options;
    const entity = useEntityStore();
    try{
        entity.setLoading(true)
        const response = await callback();
        entity.setLoading(false)
        entity.setSuccess(true);
        if (onSuccess) {
            onSuccess(response)
        }
        entity.setMessage(successMessage);
    }catch (error) {
        entity.setLoading(false)
        if (error.response) {
            entity.setError(true)
            entity.setMessage(error.response.data.message);
        } else if (error.request) {
            entity.setError(false)
            entity.setMessage('Network Error');
        }
        throw error
    }finally {

    }
}
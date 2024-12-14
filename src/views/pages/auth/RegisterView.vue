<script setup>
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar/index.js";
import Toaster from '../../../components/ui/toast/Toaster.vue'
import {Button} from "@/components/ui/button/index.js";
import InputFormGroup from "@/components/InputFormGroup.vue";
import SocialButton from "@/components/SocialButton.vue";
import OrDivider from "@/components/OrDivider.vue";
import {authService} from "@/api/service/authService.js";
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import {registerSchema} from "@/validation/authSchema.js";
import {useAuthStore} from "@/store/authStore.js";
import {useEntityStore} from "@/store/entityStore.js";
import LoadingButton from "../../../components/ui/button/LoadingButton.vue";
import {computed} from "vue";

const authStore = useAuthStore()
const entityStore = useEntityStore()
const isLoading = computed(() => entityStore.getLoading)
const {handleSubmit} = useForm({
  validationSchema: toTypedSchema(registerSchema),
  initialValues: {
    username: '',
    email: '',
    password: '',
    rePassword: ''
  }
});
const onSubmitRegister = handleSubmit(async (values) => {
  const credentials = {
    name: values.name,
    email: values.email,
    password: values.password
  }
  await authStore.register(credentials);
})
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
    <Card class="w-full max-w-md p-2">
      <CardHeader>
        <Avatar class="self-center w-20 h-20">
          <AvatarImage src="https://cas.hou.edu.vn/cas/images/hou-logo.png" alt="App Logo"/>
          <AvatarFallback>App Logo</AvatarFallback>
        </Avatar>
        <CardTitle>Create your account to join HOpenConnect!</CardTitle>
        <CardDescription>
          Already have an account? <router-link :to="{ name: 'Login' }" class="text-blue-500">Sign In</router-link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="onSubmitRegister">
          <div class="grid space-y-3">
            <InputFormGroup type="text" placeholder="Enter your username" id="username" label="Username"
                            name="name"/>
            <InputFormGroup type="email" placeholder="Enter your email" id="email" label="Email" name="email"/>
            <InputFormGroup type="password" placeholder="Enter your password" id="password" label="Password"
                            name="password"/>
            <InputFormGroup type="password" placeholder="Confirm your password" id="confirmPassword"
                            label="Confirm Password" name="confirmPassword"/>
            <Button type="submit">
              Register
            </Button>
          </div>
        </form>
        <div class="flex flex-col">
          <OrDivider/>
          <SocialButton/>
        </div>
      </CardContent>
    </Card>
  </div>
  <Toaster/>
</template>

<style scoped>
</style>
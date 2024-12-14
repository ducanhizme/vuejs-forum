<script setup>
import OrDivider from "@/components/OrDivider.vue";
import {Button} from "@/components/ui/button/index.js";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar/index.js";
import InputFormGroup from "@/components/InputFormGroup.vue";
import SocialButton from "@/components/SocialButton.vue";
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import {loginSchema} from "@/validation/authSchema.js";

const {handleSubmit} = useForm({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: {
    email: '',
    password: ''
  }
});
const onLoginSubmit = handleSubmit(async (values) => {
})
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
    <Card class="w-full max-w-md p-2">
      <CardHeader>
        <Avatar class="self-center w-20 h-20">
          <AvatarImage src="https://cas.hou.edu.vn/cas/images/hou-logo.png" alt="App Logo" />
          <AvatarFallback>App Logo</AvatarFallback>
        </Avatar>
        <CardTitle>We’re glad to have you back at HOpenConnect!</CardTitle>
        <CardDescription>
          Don't have account yet? <router-link :to="{ name: 'register' }" class="text-blue-500">Sign In</router-link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="onLoginSubmit">
          <div class="grid space-y-3">
            <InputFormGroup type="email" placeholder="Enter your email" id="email" label="Email" name="email" />
            <InputFormGroup type="password" placeholder="Enter your password" id="password" label="Password" name="password"/>
            <Button type="submit" class="bg-blue-400">Login</Button>
          </div>
        </form>
        <div class="flex flex-col">
          <OrDivider />
          <SocialButton />
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>

</style>
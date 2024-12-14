<template>
  <div class="flex flex-col gap-1.5">
    <Label :class="{'text-red-800':errorMessage}" :for="id">{{ errorMessage ? errorMessage : label }}</Label>
    <Input :type="type" :placeholder="placeholder" :id="id" v-model="value"/>
  </div>
</template>

<script setup>
import {Input} from "@/components/ui/input/index.js";
import {Label} from "@/components/ui/label/index.js";
import {useField} from "vee-validate";

const props = defineProps({
  type: String,
  placeholder: String,
  id: String,
  label: String,
  name: String
});
const {value, errorMessage} = useField(() => props.name);
</script>
<script setup>
import {toast} from "@/components/ui/toast/index.js";
import {useEntityStore} from "@/store/entityStore.js";
import {computed, watch} from "vue";

const store = useEntityStore();
const error = computed(() => store.getError);
const message = computed(() => store.getMessage);
const success = computed(() => store.getSuccess);
watch(error, (newError) => {
  if (newError) {
    console.log("App",newError);
    console.log("Message",message);
    toast({
      title: message.value,
      variant: 'destructive',
    });
  }
});

watch(success, (newSuccess) => {
  if (newSuccess) {
    toast({
      title: message.value,
      variant: 'success',
    });
  }
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
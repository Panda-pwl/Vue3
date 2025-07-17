<template>
  <div>
    <MyButton ref="btnRef" type="primary">默认按钮</MyButton>
    <MyButton ref="btnRef" type="danger">默认按钮</MyButton>
    <a href="">1242342</a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MyButton from "@/components/Button/MyButton.vue";


const btnRef = ref<InstanceType<typeof MyButton> | null>(null);

onMounted(()=>{
  console.log(btnRef.value?.buttonRef)
})
</script>

<style scoped></style>

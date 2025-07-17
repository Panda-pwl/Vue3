<template>
  <h1>MyButton</h1>
  <hr />
  <h2>基础用法</h2>
  <div class="block">
    <MyButton> hello </MyButton>
    <MyButton type="primary"> Primary </MyButton>
    <MyButton type="success"> Success </MyButton>
    <MyButton type="warning"> Warning </MyButton>
    <MyButton type="danger"> Danger </MyButton>
    <MyButton type="info"> Info </MyButton>
  </div>

  <div class="block">
    <MyButton plain> hello </MyButton>
    <MyButton type="primary" plain> Primary </MyButton>
    <MyButton type="success" plain> Success </MyButton>
    <MyButton type="warning" plain> Warning </MyButton>
    <MyButton type="danger" plain> Danger </MyButton>
    <MyButton type="info" plain> Info </MyButton>
  </div>

  <div class="block">
    <MyButton round> hello </MyButton>
    <MyButton type="primary" round> Primary </MyButton>
    <MyButton type="success" round> Success </MyButton>
    <MyButton type="warning" round> Warning </MyButton>
    <MyButton type="danger" round> Danger </MyButton>
    <MyButton type="info" round> Info </MyButton>
  </div>

  <!-- <div class="block">
        <MyButton circle> <Icon icon="star" /> </MyButton>
        <MyButton type="primary" circle> <Icon icon="star" /> </MyButton>
        <MyButton type="success" circle> <Icon icon="star" /> </MyButton>
        <MyButton type="warning" circle> <Icon icon="star" /> </MyButton>
        <MyButton type="danger" circle> <Icon icon="star" /> </MyButton>
        <MyButton type="info" circle> <Icon icon="star" /> </MyButton>
      </div> -->
  <hr />
  <h2>禁用状态</h2>
  <div class="block">
    <MyButton disabled> hello </MyButton>
    <MyButton type="primary" disabled> Primary </MyButton>
    <MyButton type="success" disabled> Success </MyButton>
    <MyButton type="warning" disabled> Warning </MyButton>
    <MyButton type="danger" disabled> Danger </MyButton>
    <MyButton type="info" disabled> Info </MyButton>
  </div>

  <div class="block">
    <MyButton plain disabled> hello </MyButton>
    <MyButton type="primary" plain disabled> Primary </MyButton>
    <MyButton type="success" plain disabled> Success </MyButton>
    <MyButton type="warning" plain disabled> Warning </MyButton>
    <MyButton type="danger" plain disabled> Danger </MyButton>
    <MyButton type="info" plain disabled> Info </MyButton>
  </div>

  <hr />
  <h2>不同大小的按钮</h2>
  <div class="block">
    <MyButton size="large"> Large </MyButton>
    <MyButton size="normal"> Normal </MyButton>
    <MyButton size="small"> Small </MyButton>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MyButton from "@/components/Button/MyButton.vue";

const btnRef = ref<InstanceType<typeof MyButton> | null>(null);

onMounted(() => {
  // 父组件访问子组件内 button 元素
  console.log(btnRef.value?.buttonRef);
});
</script>

<style scoped>
.block {
  margin-bottom: 10px;
}
</style>

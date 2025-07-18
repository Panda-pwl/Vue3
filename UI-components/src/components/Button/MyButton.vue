<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    ref="buttonRef"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { ButtonProps} from "./types";

const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

const buttonClasses = computed(() => {
  return [
    "my-button",
    props.type && `my-button--${props.type}`,
    props.size && `my-button--${props.size}`,
    {
      "is-plain": props.plain,
      "is-round": props.round,
      "is-disabled": props.disabled,
    },
  ];
});

const buttonRef = ref<HTMLButtonElement  | null>(null);

defineExpose({
  buttonRef,
});

// 定义组件名字
defineOptions({
  name: "MyButton",
});
</script>

<style scoped>

</style>

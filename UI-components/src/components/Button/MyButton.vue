<template>
  <button
    :class="buttonClasses"
    :disabled="disable"
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
    "vk-button",
    props.type && `vk-button--${props.type}`,
    props.size && `vk-button--${props.size}`,
    {
      "is-plain": props.plain,
      "is-round": props.round,
      "is-disable": props.disable,
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

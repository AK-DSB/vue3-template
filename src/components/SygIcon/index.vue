<template>
  <div v-bind="$attrs">
    <svg :style="{ width: `${width}px`, height: `${height}px` }">
      <use :xlink:href="`${prefix}${name}`" :fill="color"></use>
    </svg>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  name: String,
  color: {
    type: String,
    default: "red",
  },
  width: {
    type: String,
    default: "16",
  },
  height: {
    type: String,
    default: "16",
  },
});
</script>
<style scoped lang="less"></style>

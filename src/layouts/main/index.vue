<template>
  <router-view #="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>
<script lang="ts" setup>
import useLayOutSettingStore from "@/store/modules/setting";
import { computed, nextTick, ref, watch } from "vue";

const settingStore = useLayOutSettingStore();
const refresh = computed(() => settingStore.refresh);

// 控制当前组件是否销毁重建
const flag = ref<boolean>(true);

const toggleFlag = () => {
  flag.value = !flag.value;
};

watch(refresh, () => {
  toggleFlag();
  nextTick(() => toggleFlag());
});
</script>
<script lang="ts">
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Main",
};
</script>
<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>

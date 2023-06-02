import { defineStore } from "pinia";

const useLayOutSettingStore = defineStore("SettingStore", {
  persist: true,
  state: () => {
    return {
      fold: false, // 控制菜单折叠
      refresh: false, // 控制页面刷新
    };
  },
  actions: {
    setFold(value: boolean) {
      this.fold = value;
    },
    toggleFold() {
      this.setFold(!this.fold);
    },
    setRefresh(value: boolean) {
      this.refresh = value;
    },
    toggleRefresh() {
      this.setRefresh(!this.refresh);
    },
  },
});

export default useLayOutSettingStore;

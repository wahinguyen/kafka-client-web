import { defineStore } from "pinia";
import { ref } from "vue";

export const useBehaviorStore = defineStore("behavior", () => {
  const behaviorData = ref({
    total: 0,
    bluePercent: 0,
    redPercent: 0,
    yellowPercent: 0,
  });

  return { behaviorData };
});

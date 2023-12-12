<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { socket } from "@/socket.js";
import { useBehaviorStore } from "@/stores/behavior";

const data = computed(() => useBehaviorStore().behaviorData);

onMounted(() => {
  socket.connect();
});
</script>

<template>
  <div class="w-full h-screen flexitems-center justify-center">
    <div
      class="w-[1024px] h-full flex flex-col gap-8 items-center justify-center"
    >
      <div class="text-lg">Total vote: {{ data.total }}</div>
      <div class="flex flex-row gap-8 items-center justify-center">
        <div
          class="hover:bg-red-500 shadow-md text-white font-bold w-40 h-40 bg-red-600 rounded-lg flex items-center justify-center"
        >
          {{ data.redPercent }}%
        </div>
        <div
          class="hover:bg-blue-500 shadow-md text-white font-bold w-40 h-40 bg-blue-600 rounded-lg flex items-center justify-center"
        >
          {{ data.bluePercent }}%
        </div>
        <div
          class="hover:bg-yellow-500 shadow-md text-white font-bold w-40 h-40 bg-yellow-600 rounded-lg flex items-center justify-center"
        >
          {{ data.yellowPercent }}%
        </div>
      </div>
    </div>
  </div>
</template>

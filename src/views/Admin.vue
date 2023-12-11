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
  <div class="h-screen text-xl flex flex-col items-center justify-center gap-2">
    <div class="flex flex-row gap-1">
      <h4 class="font-bold">Total:</h4>
      {{ data.total }}
    </div>
    <div class="flex flex-row gap-1">
      <h4 class="font-bold">Red:</h4>
      {{ data.redPercent }}%
    </div>
    <div class="flex flex-row gap-1">
      <h4 class="font-bold">Blue:</h4>
      {{ data.bluePercent }}%
    </div>
    <div class="flex flex-row gap-1">
      <h4 class="font-bold">Yellow:</h4>
      {{ data.yellowPercent }}%
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const countDown = ref(0);

const updateColorPicker = async (color) => {
  try {
    if (countDown.value > 0) return;

    const response = await axios.put(
      "http://ec2-54-80-96-131.compute-1.amazonaws.com:3000/api/1",
      {
        colors_behavior: color,
      }
    );

    if (response && response.status == 200) {
      countDown.value = 10;
      updateCountDown();
      return;
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const updateCountDown = () => {
  if (countDown.value > 0) {
    setTimeout(() => {
      countDown.value--;
      updateCountDown();
    }, 1000);
  }
};
</script>

<template>
  <div class="w-full h-screen flexitems-center justify-center">
    <div
      class="w-[1024px] h-full flex flex-col gap-8 items-center justify-center"
    >
      <div class="text-lg">Count down for next vote: {{ countDown }}</div>
      <div class="flex flex-row gap-8 items-center justify-center">
        <div
          :class="{ '!bg-gray-400': countDown > 0 }"
          class="hover:bg-red-500 cursor-pointer shadow-md text-white font-bold w-40 h-40 bg-red-600 rounded-lg flex items-center justify-center"
          @click="updateColorPicker('red')"
        >
          Red
        </div>
        <div
          :class="{ '!bg-gray-400': countDown > 0 }"
          class="hover:bg-blue-500 cursor-pointer shadow-md text-white font-bold w-40 h-40 bg-blue-600 rounded-lg flex items-center justify-center"
          @click="updateColorPicker('blue')"
        >
          Blue
        </div>
        <div
          :class="{ '!bg-gray-400': countDown > 0 }"
          class="hover:bg-yellow-500 cursor-pointer shadow-md text-white font-bold w-40 h-40 bg-yellow-600 rounded-lg flex items-center justify-center"
          @click="updateColorPicker('yellow')"
        >
          Yellow
        </div>
      </div>
    </div>
  </div>
</template>

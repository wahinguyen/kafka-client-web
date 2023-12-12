import { reactive } from "vue";
import { io } from "socket.io-client";
import { useBehaviorStore } from "@/stores/behavior";
import sound from "@/assets/sounds/achive.mp3";

export const state = reactive({
  connected: false,
});

const URL = "http://ec2-54-80-96-131.compute-1.amazonaws.com:3002";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("behavior", (msg) => {
  const audio = new Audio(sound);
  audio.play().catch(function () {
    console.log("Chrome cannot play sound without user interaction first");
  });
  useBehaviorStore().behaviorData = msg;
  console.log(useBehaviorStore().behaviorData);
});

socket.on("disconnect", () => {
  state.connected = false;
});

import { reactive } from "vue";
import { io } from "socket.io-client";
import { useBehaviorStore } from "@/stores/behavior";

export const state = reactive({
  connected: false,
});

const URL = "http://54.80.96.131:3002";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("behavior", (msg) => {
  useBehaviorStore().behaviorData = msg;
  console.log(useBehaviorStore().behaviorData);
});

socket.on("disconnect", () => {
  state.connected = false;
});

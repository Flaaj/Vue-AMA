<template>
  <div class="question-list">A question list</div>
  <button v-on:click="ask">Ask</button>
</template>

<script lang="ts">
import { postQuestion } from "../api";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {};
  },
  methods: {
    async ask(): void {
      const data = await postQuestion("Czy papież lubi kremówki?");
      console.log(data);
    },
  },
});
</script>

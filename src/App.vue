<template>
    <router-view />
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import {
    connectFirebase,
    getQuestionsFromFirebase,
} from "@/services/firebase.service";

export default defineComponent({
    mounted() {
        connectFirebase();
        getQuestionsFromFirebase();
    },
});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>

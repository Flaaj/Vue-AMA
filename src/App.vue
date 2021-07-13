<template>
    <router-view />
</template>

<script>
/* eslint-disable */
import database from "@/services/firebase.service";

export default {
    mounted() {
        database.connect();
        database.authStateListener();
        database.getQuestions();
        database.getUsers();
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
}
</style>

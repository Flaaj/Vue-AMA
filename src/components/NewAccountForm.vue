<template>
    <div class="login">
        <h2 class="heading">Login</h2>
        <form class="form">
            <label class="label" for="login">Login:</label>
            <input class="input" id="login" type="text" v-model="login" />
            <label class="label" for="password">Password:</label>
            <input
                class="input"
                id="password"
                type="password"
                v-model="password"
            />
            <Button text="Submit" />
        </form>
    </div>
</template>

<script>
/* eslint-disable */
// components:
import Button from "@/components/Button.vue";
// database service:
import database from "@/services/firebase.service";

export default {
    data() {
        return {
            login: "",
            password: "",
        };
    },
    methods: {
        onSubmit() {
            database.logIn(this.login, this.password);
        },
    },
    components: {
        Button,
    },
};
</script>

<style scoped lang="scss">
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .btn {
        margin-top: 10px;
        max-width: 200px;
    }
}
</style>

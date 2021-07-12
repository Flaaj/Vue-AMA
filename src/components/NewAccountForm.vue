<template>
    <div class="create-account">
        <h2 class="heading">New account</h2>
        <form class="form" @submit.prevent="onSubmit">
            <label class="label" for="login">Email:</label>
            <input class="input" id="login" type="text" v-model="email" />
            <label class="label" for="password">Password:</label>
            <input
                class="input"
                id="password"
                type="password"
                v-model="password"
            />
            <Button text="SUBMIT" />
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
            email: "",
            password: "",
        };
    },
    methods: {
        onSubmit() {
            database.createUser(this.email, this.password);
        },
    },
    components: {
        Button,
    },
};
</script>

<style scoped lang="scss">
.create-account {
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

    .input {
        margin: 10px 20px;
        display: block;
        height: 20px;
        border: none;
        border-bottom: 1px solid black;
        padding-left: 20px;

        &:focus {
            border-bottom: 2px solid black;
            outline: none;
        }
    }

    .btn {
        margin: 30px auto 20px;
        width: 200px;
    }
}
</style>

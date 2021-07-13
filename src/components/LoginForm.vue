<template>
    <div class="login">
        <div class="hidden">{{ logged }}</div>
        <h2 class="heading">Login</h2>
        <form class="form" @submit.prevent="onSubmit">
            <label class="label" type="email" for="login">Email:</label>
            <input class="input" id="login" type="text" v-model="email" />
            <label class="label" for="password">Password:</label>
            <input
                class="input"
                id="password"
                type="password"
                v-model="password"
            />
            <Button text="LOG IN" />
        </form>
        <div class="no-account">
            Don't have an account?
            <router-link to="/new-account" class="router-link"
                >Make one</router-link
            >
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";
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
        async onSubmit() {
            await database.login(this.email, this.password);
            this.$router.push("/");
        },
    },
    computed: mapState({
        logged: (state) => state.logged,
    }),
    components: {
        Button,
    },
    updated() {
        if (this.logged) this.$router.push("/");
    },
};
</script>

<style scoped lang="scss">
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    position: relative;

    .heading {
        margin-top: 20px;
    }

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

    .no-account {
        position: absolute;
        bottom: -20px;
        left: 0%;
        width: 100%;
        text-align: center;
    }

    .router-link {
        color: skyblue;
    }
}

.hidden {
    display: none;
}
</style>

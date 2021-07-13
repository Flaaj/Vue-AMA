<template>
    <div class="ama">
        <h2 class="heading">USER: {{ user.email }}</h2>
        <h1 class="title">Ask me anything!</h1>
        <form
            v-if="isLogged && !isCurrentUser"
            class="form"
            @submit.prevent="askQuestion"
        >
            <input
                class="input"
                v-model="questionInput"
                placeholder="Ask a question"
            />
            <Button text="Ask" />
        </form>
        <div class="list" v-if="questions">
            <Question
                v-for="question of questions"
                v-bind:key="question.id"
                :questionData="question"
            />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from "@vue/runtime-core";
import { mapState } from "vuex";
// components
import Question from "@/components/Question.vue";
import Button from "@/components/Button.vue";
// database service:
import database from "@/services/firebase.service";

export default defineComponent({
    data() {
        return {
            questionInput: "",
        };
    },
    computed: mapState({
        userID(state) {
            const idFromRoute =
                this.$router.currentRoute.value.path.split("/")[2];
            if (idFromRoute) return idFromRoute.replace("}", "");
            if (state.logged) return state.loggedUser.uid;
            return "";
        },
        questions(state) {
            return state.questions.filter(
                (question) => question.askedTo === this.userID
            );
        },
        isLogged(state) {
            return state.logged;
        },
        isCurrentUser(state) {
            return state.logged && state.loggedUser.uid === this.userID;
        },
        user(state) {
            console.log(state.users.find((user) => user.id === this.userID));
            return state.users.find((user) => user.id === this.userID);
        },
    }),
    methods: {
        askQuestion() {
            database.postQuestion(this.questionInput, this.userID);
        },
    },
    components: {
        Question,
        Button,
    },
});
</script>

<style scoped lang="scss">
.ama {
    width: 100%;
    display: flex;
    flex-direction: column;

    .form {
        margin: 10px auto;
    }

    .input {
        height: 22px;
        border-radius: 10px;
        min-width: 200px;
        margin: 0 10px 0 0;
        padding: 0 20px 0 20px;
        border-color: black;
        outline: none;
    }
}

.heading,
.title {
    margin: 0 auto;
    display: inline-block;
}

.heading {
    width: 100%;
    text-align: center;
    background: black;
    color: white;
}
</style>

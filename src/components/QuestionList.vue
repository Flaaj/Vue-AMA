<template>
    <div class="ama">
        <h1 class="heading">Ask me anything!</h1>
        <form
            class="ama__form"
            @submit.prevent="() => askQuestion(questionInput)"
        >
            <input
                class="ama__input"
                v-model="questionInput"
                placeholder="Ask a question"
            />
            <button class="ama__submit" type="submit">Ask</button>
        </form>
        <div class="ama__list" v-if="questions">
            <Question
                v-for="question of questions"
                v-bind:key="question.id"
                :data="question"
                v-on:updateQuestions="updateQuestions"
            />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { postQuestion, answerQuestion, getQuestions } from "@/services/firebase.service";
import { defineComponent } from "@vue/runtime-core";
import Question from "./Question.vue";

export default defineComponent({
    data() {
        return {
            questions: [],
            questionInput: "",
        };
    },
    async mounted() {
        this.questions = await getQuestions();
    },
    methods: {
        async updateQuestions() {
            console.log("updated");
            const questions = await getQuestions();
            console.log(questions);

            this.questions = questions;
        },
        async askQuestion(question) {
            const response = await postQuestion(question);
            if (response.error) {
                console.log(
                    "Error: code",
                    response.status,
                    response.statusText
                );
            } else {
                this.questions = await getQuestions();
                this.questionInput = "";
            }
        },
        async answer(questionID, answer) {
            const data = await answerQuestion(questionID, answer);
        },
    },
    components: {
        Question,
    },
});
</script>

<style scoped lang="scss">
.ama {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    &__form {
        margin: 10px auto;
    }

    &__list {
        border-bottom: 2px solid black;
        border-left: 2px solid black;
        border-right: 2px solid black;
    }

    &__input {
        height: 22px;
        border-radius: 10px;
        min-width: 200px;
        margin: 0 10px 0 0;
        padding: 0 20px 0 20px;
        border-color: black;
        outline: none;
    }

    &__submit {
        height: 26px;
        padding: 0 20px;
        border-radius: 10px;
        border: none;
        background-color: forestgreen;
        color: white;
        cursor: pointer;
    }
}

.heading {
    margin: 0 auto;
    display: inline-block;
}
</style>

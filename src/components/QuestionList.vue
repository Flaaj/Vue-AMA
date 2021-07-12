<template>
    <div class="ama">
        <h1 class="heading">Ask me anything!</h1>
        <form class="ama__form" @submit.prevent="askQuestion">
            <input
                class="ama__input"
                v-model="questionInput"
                placeholder="Ask a question"
            />
            <Button text="Ask" />
        </form>
        <div class="ama__list" v-if="questions">
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
        questions: (state) => state.questions,
    }),
    methods: {
        askQuestion() {
            database.postQuestion(this.questionInput);
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

    &__form {
        margin: 10px auto;
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
}

.heading {
    margin: 0 auto;
    display: inline-block;
}
</style>

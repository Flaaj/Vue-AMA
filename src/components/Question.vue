<template>
    <div class="wrapper">
        <p class="question">
            <span class="label">Question:</span> {{ questionData.question }}
            <button class="delete" v-on:click="deleteThisQuestion">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </p>
        <p class="answer" v-if="answerStatus === ANSWER.EXISTS">
            <span class="label">Answer:</span> {{ questionData.answer }}
        </p>
        <div v-else class="answer-wrapper">
            <button
                class="btn"
                v-if="answerStatus === ANSWER.DOESNT_EXIST"
                v-on:click="startAnswering"
            >
                Answer this question
            </button>
            <form
                class="form"
                v-if="answerStatus === ANSWER.IN_PROGRESS"
                @submit.prevent="submitAnswer"
            >
                <input
                    class="input"
                    type="text"
                    placeholder="Write your answer here"
                    v-model="answerInput"
                />
                <Button text="Add answer" />
            </form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from "@vue/runtime-core";
// components
import Button from "@/components/Button.vue";
// database service
import database from "@/services/firebase.service";

export default defineComponent({
    props: ["questionData"],
    data() {
        return {
            ANSWER: {
                DOESNT_EXIST: 0,
                EXISTS: 1,
                IN_PROGRESS: 2,
            },
            answerStatus: 0,
            answerInput: "",
        };
    },
    mounted() {
        if (
            this.questionData.answer !== undefined &&
            this.questionData.answer !== ""
        ) {
            this.answerStatus = this.ANSWER.EXISTS;
        }
    },
    methods: {
        startAnswering() {
            this.answerStatus = this.ANSWER.IN_PROGRESS;
        },
        submitAnswer() {
            if (this.answerInput.length < 2) return;
            database.postAnswer(this.questionData.id, this.answerInput);
            this.answerStatus = this.ANSWER.EXISTS;
        },
        deleteThisQuestion() {
            database.deleteQuestion(this.questionData.id);
        },
    },
    components: {
        Button,
    },
});
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: -10px 0px 0 -9px black;
}
.question {
    font-weight: bold;
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 40px;
    margin-top: 0px;
    margin-bottom: 7px;
    position: relative;

    .delete {
        position: absolute;
        right: 0;
        background: none;
        border: none;
        color: transparent;
        cursor: pointer;
        transition: 0.5s;
    }

    &:hover {
        .delete {
            color: red;
        }
    }
}
.answer {
    &-wrapper {
        margin: 0 auto;
    }
    margin-left: 21px;
    margin-bottom: 5px;
    margin-top: 0px;
    .label {
        font-weight: bold;
    }
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
</style>

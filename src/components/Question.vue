<template>
    <div class="question-wrapper" v-if="data">
        <p class="question">
            <span class="label">Question:</span> {{ data.question }}
            <button class="delete" v-on:click="deleteThisQuestion">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </p>
        <p class="answer" v-if="answerStatus === ANSWER.EXISTS">
            <span class="label">Answer:</span> {{ data.answer }}
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
                <button class="btn" type="submit">Add answer</button>
            </form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from "@vue/runtime-core";
import { answerQuestion, deleteQuestion } from "@/services/firebase.service";

export default defineComponent({
    props: ["data"],
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
        if (this.data.answer !== "") {
            this.answerStatus = this.ANSWER.EXISTS;
        }
    },
    methods: {
        startAnswering() {
            this.answerStatus = this.ANSWER.IN_PROGRESS;
        },
        async submitAnswer() {
            if (this.answerInput.length >= 2) {
                const body = {
                    id: this.data.id,
                    question: this.data.question,
                    answer: this.answerInput,
                };
                const response = await answerQuestion(this.data.id, body);
                if (!response.error) {
                    this.$emit("updateQuestions");
                    this.answerStatus = this.ANSWER.EXISTS;
                }
            }
        },
        async deleteThisQuestion() {
            const response = await deleteQuestion(this.data.id);
            if (!response.error) {
                this.$emit("updateQuestions");
            }
        },
    },
});
</script>

<style scoped lang="scss">
.question {
    &-wrapper {
        display: flex;
        flex-direction: column;
    }
    font-weight: bold;
    border-top: 2px solid black;
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 40px;
    margin-top: 0px;
    margin-bottom: 10px;
    position: relative;

    &:hover {
        .delete {
            color: red;
        }
    }

    .delete {
        position: absolute;
        right: 0;
        background: none;
        border: none;
        color: transparent;
        cursor: pointer;
        transition: 0.5s;
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

.btn {
    height: 26px;
    padding: 0 20px;
    border-radius: 10px;
    border: none;
    background-color: forestgreen;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    margin-top: -5px;
}
</style>

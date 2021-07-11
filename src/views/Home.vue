<template>
    <div class="home">
        <QuestionList />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import QuestionList from "@/components/QuestionList.vue";
@Options({
    components: {
        QuestionList,
    },
})
export default class Home extends Vue {}
</script>

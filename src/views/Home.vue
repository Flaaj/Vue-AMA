<template>
    <Layout>
        <QuestionList />
    </Layout>
</template>

<script>
/* eslint-disable */
import Layout from "@/layouts/Layout.vue";
import QuestionList from "@/components/QuestionList.vue";

import Store from "@/store";

export default {
    components: {
        Layout,
        QuestionList,
    },
    mounted() {
        if (this.$route.path === "/" && !Store.state.logged)
            this.$router.push("/login");
    },
};
</script>

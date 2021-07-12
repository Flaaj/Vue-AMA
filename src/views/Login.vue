<template>
    <Layout>
        <LoginForm />
    </Layout>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

import Layout from "@/layouts/Layout.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
    computed: mapState({
        userAlreadyLogged: (state) => state.logged,
    }),
    components: {
        Layout,
        LoginForm,
    },
    mounted() {
        if (this.userAlreadyLogged) this.$router.push("/");
    },
};
</script>

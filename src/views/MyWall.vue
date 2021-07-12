<template>
    <Layout>
        <LoginForm />
    </Layout>
</template>

<script>
import { mapState } from "vuex";

import Layout from "@/layouts/Layout.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
    computed: mapState({
        logged: (state) => (state.logged ? "logged" : "not logged"),
    }),
    components: {
        Layout,
        LoginForm,
    },
};
</script>

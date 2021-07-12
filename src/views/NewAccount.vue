<template>
    <Layout>
        <NewAccount />
    </Layout>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

import Layout from "@/layouts/Layout.vue";
import NewAccount from "@/components/NewAccountForm.vue";

export default {
    computed: mapState({
        logged: (state) => (state.logged ? "logged" : "not logged"),
    }),
    components: {
        Layout,
        NewAccount,
    },
};
</script>

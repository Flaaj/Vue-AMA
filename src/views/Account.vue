<template>
    <Layout> </Layout>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

import Layout from "@/layouts/Layout.vue";

export default {
    computed: mapState({
        logged: (state) => (state.logged ? "logged" : "not logged"),
    }),
    components: {
        Layout,
    },
};
</script>

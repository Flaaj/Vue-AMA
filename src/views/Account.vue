<template>
    <Layout>
        <div class="account">
            <Button text="Logout" :submitHandler="logout" />
        </div>
    </Layout>
</template>

<script>
/* eslint-disable */
import Layout from "@/layouts/Layout.vue";
import Button from "@/components/Button.vue";
import database from "@/services/firebase.service";

export default {
    components: {
        Layout,
        Button,
    },
    methods: {
        logout() {
            database.logout();
        },
    },
};
</script>

<style scoped lang="scss">
    .account {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
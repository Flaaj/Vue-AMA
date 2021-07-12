<template>
    <Layout>
        <UsersList />
    </Layout>
</template>

<script>
import Layout from "@/layouts/Layout.vue";
import UsersList from "@/components/UsersList.vue";

export default {
    components: {
        Layout,
        UsersList,
    },
};
</script>
 
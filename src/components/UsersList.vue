<template>
    <h2 class="heading">Users</h2>
    <div class="user-list">
        <UserItem v-for="user of users" v-bind:key="user.id" :user="user" />
    </div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from "@vue/runtime-core";
import { mapState } from "vuex";
import UserItem from "@/components/UserItem.vue";

export default defineComponent({
    data() {
        return {};
    },
    computed: mapState({
        users: (state) => state.users,
    }),
    methods: {},
    components: {
        UserItem,
    },
});
</script>

<style scoped lang="scss">
.heading {
    background-color: black;
    color: white;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0;
    margin-bottom: 0;
}
.user-list {
}
</style>

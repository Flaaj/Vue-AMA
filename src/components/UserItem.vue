<template>
    <div class="user-item">
        <router-link :to="`/users/${user.id}}`">
            {{ user.email }}
            <span v-if="isCurrentUser">(you)</span>
        </router-link>
    </div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

export default {
    props: ["user"],
    computed: mapState({
        isCurrentUser(state) {
            return state.logged && state.loggedUser.uid === this.user.id;
        },
    }),
    methods: {},
};
</script>

<style scoped lang="scss">
.user-item {
    border: 1px solid black;
    padding: 10px 20px;
}
</style>

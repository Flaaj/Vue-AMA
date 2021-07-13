<template>
    <div class="user-item">
        <router-link class="link" :to="`/users/${user.id}}`">
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
    padding: 10px 20px;

    &:nth-child(even) {
        background: rgba(#efefef, 0.3);
    }

    .link {
        color: black;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>

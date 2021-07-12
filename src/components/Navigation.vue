<template>
    <div class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">
                <router-link to="/">My wall</router-link>
            </li>
            <li class="navigation__item">
                <router-link to="/users">Users</router-link>
            </li>
            <li class="navigation__item" v-if="logged">
                <router-link to="/account">Account</router-link>
            </li>
            <li class="navigation__item" v-else>
                <router-link to="/login">Login</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: mapState({
        logged: (state) => state.logged,
    }),
};
</script>

<style lang="scss">
.navigation {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: stretch;
    align-items: center;

    &__list {
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        list-style: none;
    }

    &__item {
        width: calc(33.33% - 3px);
        padding: 27px 0;
        background-color: #353535;
        transition: 0.5s;
        border-radius: 5px;

        &:hover {
            background-color: #222;
        }
        a {
            width: 100%;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            color: white;
            cursor: pointer;
        }
    }
}
</style>

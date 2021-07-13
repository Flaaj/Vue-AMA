<template>
    <button class="btn" @click="onClick">{{ text }}</button>
</template>

<script>
/* eslint-disable */
export default {
    props: ["text"],
    methods: {
        onClick() {
            try {
                this.$emit("submitHandler");
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<style lang="scss">
.btn {
    height: 26px;
    padding: 0 20px;
    border-radius: 10px;
    background: white;
    border: 2px solid forestgreen;
    color: forestgreen;
    cursor: pointer;
    margin-bottom: 10px;
    margin-top: -5px;
    transition: 0.5s;
    &:hover {
        background-color: forestgreen;
        color: white;
    }
}
</style>

<template>
    <div class="app-wrapper">
        <div class="content">
            <slot />
        </div>
        <Navigation />
    </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
    components: {
        Navigation,
    },
};
</script>

<style scoped lang="scss">
.app-wrapper {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}
.content {
    height: calc(100vh - 80px);
    max-height: 1400px;
}
</style>

<template>
    <Head>
        <title>Araucanía</title>
    </Head>

    <router-view />

    <rdx-loader v-if="$store.global.loader"></rdx-loader>

    <rdx-confirm v-if="$store.global.confirm.show"></rdx-confirm>
</template>

<style lang="scss">
// @import "@/styles/rdx-dashboard.scss";
</style>

<script>
import { Head } from "@vueuse/head";

export default {
    data() {
        return {};
    },
    components: {
        Head: Head,
    },
    created() {
        this.$store.global.clear_confirm();
    },
    beforeUnmount() {},
    mounted() {},
    methods: {},
};
</script>

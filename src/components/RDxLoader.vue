<template>
    <div
        style="
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: rgb(249, 249, 249);
            opacity: 0.8;
        "
    >
        <div class="position-fixed vw-100 vh-100 center">
            <!-- <div style="background:#f99"> -->
            <div
                style="width: 3rem; height: 3rem"
                class="spinner-border text-danger"
                role="status"
            >
                <!-- <span class="sr-only"></span> -->
            </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @import "@/styles/rdx-dashboard.scss";
</style>

<script>
export default {
    name: "rdx-loader",
    props: {},
    data() {
        return {};
    },
};
</script>

<template>
    <li
        class=""
        role="button"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        :title="title"
        data-navbar-target="item"
    >
        <i :class="'bi ' + icon" style="color: #e5e5e5"></i>
    </li>
</template>
<style scoped>
/* nav.sidebar .nav li.active {
    color: white !important;
} */
nav.sidebar .nav li.active::before {
    background: white;
}
</style>
<script>
export default {
    props: {
        title: { default: null },
        icon: { default: null },
    },
    data() {
        return {};
    },
    components: {},

    created() {},
    beforeUnmount() {},
    mounted() {},
    methods: {},
};
</script>

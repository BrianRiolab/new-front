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

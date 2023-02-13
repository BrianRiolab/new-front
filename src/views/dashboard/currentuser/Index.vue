<template>
    <current-user-form />
</template>

<script>
import CurrentuserForm from "./form/User.vue";

export default {
    data() {
        return {
            //rdx_user : new URL('@/assets/images/rdx-user.png',import.meta.url) //require('@/assets/images/rdx-user.png'),
        };
    },
    components: {
        "current-user-form": CurrentuserForm,
    },

    created() {},
    beforeUnmount() {},
    mounted() {},
    methods: {},
};
</script>

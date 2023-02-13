<template>
    <ul
        class="tg-list list-group font-apercu-bold col-xl-8 mx-auto ps-xl-4 mb-3"
    >
        <template v-for="(interest, idx) in interests" :key="idx">
            <rdx-checkbox
                :text="interest.name"
                v-model:value="local_interests_ids[interest.id]"
            />
        </template>
    </ul>
</template>
<script>
const body = document.getElementsByTagName("body")[0];

import axios from "axios";
export default {
    props: {
        interests_ids: { default: [] },
    },
    data() {
        return {
            interests: [],
            local_interests_ids: {},
        };
    },

    components: {},

    beforeCreate() {
        this.$api.get({
            url: [["/api/showcase_interest", null]],
            success: (resp_interest) => {
                this.interests = resp_interest.data.results;
                this.interests.forEach((v, idx) => {
                    if (this.interests_ids.includes(v.id)) {
                        this.local_interests_ids[v.id] = true;
                    }
                });
            },
            error: (err) => {
                console.log(err);
            },
        });
    },

    created() {
        body.classList.remove("bg-gray-100");
    },
    beforeUnmount() {
        body.classList.add("bg-gray-100");
    },
    mounted() {},
    methods: {},

    watch: {
        local_interests_ids: {
            handler(newValue, oldValue) {
                console.log(this.local_interests_ids);
                let interests_ids = [];
                for (const [k, v] of Object.entries(newValue)) {
                    if (v == true) {
                        interests_ids.push(parseInt(k));
                    }
                }
                this.$emit("update:interests_ids", interests_ids);
            },
            deep: true,
        },
    },
};
</script>

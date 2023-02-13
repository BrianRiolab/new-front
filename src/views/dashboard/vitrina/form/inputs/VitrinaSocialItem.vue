<template>
    <div class="vitrina-input-group mb-3">
        <label class="mb-1">{{ description }}</label>
        <div class="position-relative">
            <div
                class="icon position-absolute p-1 center"
                style="top: 0; left: 0; z-index: 1; height: 100%"
            >
                <icon-location v-if="image === 'location'" />
                <icon-facebook v-else-if="image == 'facebook'" />
                <icon-instagram v-else-if="image == 'instagram'" />
                <icon-airbnb v-else-if="image == 'airbnb'" />
                <img
                    style="height: 100%"
                    :src="image"
                    :alt="social"
                    draggable="false"
                    v-else
                />
            </div>
            <input
                class="vitrina-form-control"
                type="text"
                v-model="local_value"
                :placeholder="placeholder"
                style="padding-left: 50px"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.vitrina-input-group {
    .icon {
        width: 45px;

        svg {
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
        }
    }
}
</style>

<script>
import IconLocation from "@/components/icons/IconLocation.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconAirbnb from "@/components/icons/IconAirbnb.vue";

export default {
    props: {
        social: { default: null },
        description: { default: null },
        icon: { default: null },
        image: { default: null },
        value: { default: null },
        placeholder: { default: null },
    },
    data() {
        return {
            local_value: null,
        };
    },
    components: {
        "icon-location": IconLocation,
        "icon-facebook": IconFacebook,
        "icon-instagram": IconInstagram,
        "icon-airbnb": IconAirbnb,
    },

    created() {
        this.local_value = this.value;
    },

    methods: {},

    watch: {
        local_value(newValue, oldValue) {
            this.$emit("update:value", newValue);
        },
    },
};
</script>

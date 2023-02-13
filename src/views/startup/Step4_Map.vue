<template>
    <vitrina-form-map />

    <div class="d-flex justify-content-end my-5">
        <rdx-button type="startup" @click="on_click_continue()"
            >Guardar y Continuar</rdx-button
        >
    </div>
</template>

<style scoped lang="scss">
.mapbox {
    widows: 100%;
    iframe {
        widows: 100%;
        height: 100%;
    }
}
.mapboxgl-ctrl-bottom-right {
    display: none !important;
}
.mapboxgl-ctrl-bottom-left {
    display: none !important;
}
</style>

<script>
import VitrinaFormMap from "../dashboard/vitrina/form/Map.vue";

//import VitrinaFormBusiness from "../dashboard/vitrina/form/Business.vue";

export default {
    data() {
        return {};
    },
    mounted() {},
    components: {
        "vitrina-form-map": VitrinaFormMap,
    },
    methods: {
        on_click_continue() {
            this.$router.push("/startup/step5");
        },
    },
};
</script>

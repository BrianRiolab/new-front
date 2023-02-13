<template>
    <div class="row g-4">
        <div class="col-12 col-xl-5 ps-xl-5">
            <vitrina-social-item
                icon="instagram"
                placeholder="Buscar"
                image="location"
            />
        </div>
        <div class="col-12 col-xl-7">
            <div class="mapbox ratio ratio-16x9">
                <iframe
                    src="https://api.mapbox.com/styles/v1/alejossilva/cl7t8k90p000f14o52eotijca.html?title=false&amp;access_token=pk.eyJ1IjoiYWxlam9zc2lsdmEiLCJhIjoiY2l3NnZpMm5tMDA0MzJ6cDR4N3N0NGN3NSJ9.zt4EJSfbleDzZqARSy8NjQ&amp;zoomwheel=false#11.38/-38.7615/-71.681/13/69"
                    title="Satellite Streets"
                    width="500"
                    height="500"
                    class="border-radius-1"
                />
            </div>
        </div>
    </div>
</template>
<style scoped>
/* .mapbox {
    border-radius: 1rem;
    overflow: hidden;
} */
canvas,
iframe {
    border-radius: 0.5rem;
}
</style>

<script>
import VitrinaSocialItem from "./inputs/VitrinaSocialItem.vue";
export default {
    props: {},
    data() {
        return {};
    },
    components: {
        "vitrina-social-item": VitrinaSocialItem,
    },
    created() {},
    beforeUnmount() {},
    mounted() {},
    methods: {},

    watch: {},
};
</script>

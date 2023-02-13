<template>
    <div class="row g-5 opacity-100 pt-2">
        <div class="col-12 col-xl-5 center">
            <vitrina-image
                type_ch="MAIN"
                v-model:uuid="local_uuid_main"
                v-model:url="local_url_main"
            />
        </div>

        <div class="col-12 col-xl-7">
            <div class="col-12 col-xl-8 mb-3 pb-1">
                <vitrina-input
                    label="Nombre de tu emprendimiento"
                    placeholder="Emprendimiento"
                    class="font-sabon-bold title"
                    style="font-size: 1.5rem"
                    v-model:value="local_title"
                />
            </div>
            <vitrina-textarea
                label="Agrega una descripción"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate ac turpis eu ullamcorper. Suspendisse at dui in enim suscipit hendrerit. Donec ut mi tortor. Fusce dapibus nunc nisi. Phasellus pretium consequat velit, consectetur porta velit convallis vitae. Sed mollis velit eros, at tempor."
                v-model:value="local_description"
            />
            <div class="d-none">
                <vitrina-input
                    label="Página web"
                    placeholder="www.example.com"
                    v-model:value="local_website"
                />
            </div>
        </div>
    </div>
</template>

<script>
import VitrinaInput from "./inputs/VitrinaInput.vue";
import VitrinaImage from "./inputs/VitrinaImage.vue";
import VitrinaTextarea from "./inputs/VitrinaTextarea.vue";

const body = document.getElementsByTagName("body")[0];

export default {
    props: {
        url_main: { default: null },
        uuid_main: { default: null },
        title: { default: null },
        description: { default: null },
        website: { default: null },
    },
    data() {
        return {
            local_url_main: null,
            local_uuid_main: null,
            local_title: null,
            local_description: null,
            local_website: null,
        };
    },

    components: {
        "vitrina-input": VitrinaInput,
        "vitrina-textarea": VitrinaTextarea,
        "vitrina-image": VitrinaImage,
    },

    beforeCreate() {},

    created() {
        body.classList.remove("bg-gray-100");
        this.local_url_main = this.url_main;
        this.local_uuid_main = this.uuid_main;
        this.local_title = this.title;
        this.local_description = this.description;
        this.local_website = this.website;

        console.log("desc: bussines ::: " + this.description);
    },
    beforeUnmount() {
        body.classList.add("bg-gray-100");
    },
    mounted() {},
    methods: {},

    watch: {
        local_url_main(newValue, oldValue) {
            this.$emit("update:url_main", newValue);
        },
        local_uuid_main(newValue, oldValue) {
            this.$emit("update:uuid_main", newValue);
        },
        local_title(newValue, oldValue) {
            this.$emit("update:title", newValue);
        },
        local_description(newValue, oldValue) {
            this.$emit("update:description", newValue);
        },
        local_website(newValue, oldValue) {
            this.$emit("update:website", newValue);
        },
    },
};
</script>

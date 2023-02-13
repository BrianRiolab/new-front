<template>
    <div class="row g-5">
        <div class="col-4">
            <vitrina-image
                type_ch="PRODUCT"
                v-model:uuid="local_uuid_product"
                v-model:url="local_url_product"
            />
        </div>

        <div class="col-8">
            <div class="row g-3">
                <div class="col-7">
                    <vitrina-input
                        label="Nombre del producto"
                        placeholder="Producto"
                        v-model:value="local_name"
                        class="font-sabon-bold mb-3"
                        style="font-size: 1.5rem"
                    />
                </div>
                <div class="col-5">
                    <vitrina-input
                        label="Etiqueta"
                        placeholder="Deporte, Hospedaje, etc."
                        v-model:value="local_price"
                    />
                </div>
            </div>
            <vitrina-textarea
                label="Agrega una descripción"
                rows="9"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate ac turpis eu ullamcorper. Suspendisse at dui in enim suscipit hendrerit. Donec ut mi tortor. Fusce dapibus nunc nisi. Phasellus pretium consequat velit, consectetur porta velit convallis vitae. Sed mollis velit eros, at tempor."
                v-model:value="local_description"
            />
        </div>
        <div class="col-12">
            <div class="vitrina-input-group mb-3">
                <label class="mb-1">Galería de imágenes</label>
            </div>
            <div class="gallery row g-0 position-relative">
                <div class="col-2 opacity-0">
                    <vitrina-image type_ch="PRODUCT" />
                </div>
                <div class="position-absolute top-0 start-0 w-100 h-100 center">
                    <span
                        class="text-center"
                        style="
                            text-underline-offset: 5px;
                            text-decoration: underline;
                            color: #8b8b8b;
                            cursor: pointer;
                        "
                    >
                        Arrastra tus imágenes o videos aquí
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.gallery {
    border: black 1px dashed;
    border-radius: 0.4rem;
}
</style>

<script>
import VitrinaInput from "./inputs/VitrinaInput.vue";
import VitrinaImage from "./inputs/VitrinaImage.vue";
import VitrinaTextarea from "./inputs/VitrinaTextarea.vue";

export default {
    props: {
        name: { default: null },
        url_product: { default: null },
        uuid_product: { default: null },
        price: { default: null },
        description: { default: null },
    },
    data() {
        return {
            product_id: null,
            local_url_product: null,
            local_uuid_product: null,
            local_name: null,
            local_price: null,
            local_description: null,
        };
    },

    components: {
        "vitrina-input": VitrinaInput,
        "vitrina-textarea": VitrinaTextarea,
        "vitrina-image": VitrinaImage,
    },

    beforeCreate() {},

    created() {
        this.local_url_product = this.url_product;
        this.local_uuid_product = this.uuid_product;
        this.local_name = this.name;
        this.local_price = this.price;
        this.local_description = this.description;
    },
    beforeUnmount() {},
    mounted() {},
    methods: {},

    watch: {
        local_url_product(newValue, oldValue) {
            this.$emit("update:url_product", newValue);
        },
        local_uuid_product(newValue, oldValue) {
            this.$emit("update:uuid_product", newValue);
        },
        local_name(newValue, oldValue) {
            this.$emit("update:name", newValue);
        },
        local_price(newValue, oldValue) {
            this.$emit("update:price", newValue);
        },
        local_description(newValue, oldValue) {
            this.$emit("update:description", newValue);
        },
    },
};
</script>

<template>
    <vitrina-form-product
        v-model:url_product="url_product"
        v-model:uuid_product="uuid_product"
        v-model:name="name"
        v-model:price="price"
        v-model:description="description"
    />

    <div class="alert alert-danger" role="alert" v-if="error">
        {{ error_message }}
    </div>

    <div class="d-flex justify-content-end my-5">
        <rdx-button type="startup" @click="on_click_continue()"
            >Guardar y Continuar</rdx-button
        >
    </div>
</template>

<style scoped>
iframe {
    position: fixed;
    border: none;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
}
.mapboxgl-ctrl-bottom-right {
    display: none !important;
}
.mapboxgl-ctrl-bottom-left {
    display: none !important;
}
</style>

<script>
import VitrinaFormProduct from "../dashboard/vitrina/form/Product.vue";

export default {
    data() {
        return {
            error: false,
            error_message: "",
            url_product: null,
            uuid_product: null,
            name: null,
            price: null,
            description: null,
        };
    },
    mounted() {},
    components: {
        "vitrina-form-product": VitrinaFormProduct,
    },
    created() {
        // Si ya ingrese un primer producto:

        if (this.$store.showcase.products.length > 0) {
            this.url_product = this.$store.showcase.products[0].url_product;
            this.uuid_product = this.$store.showcase.products[0].uuid_product;
            this.name = this.$store.showcase.products[0].name;
            this.price = this.$store.showcase.products[0].price;
            this.description = this.$store.showcase.products[0].description;
        }

        console.log("PRICE;;;;" + this.price);
        //this.url_product = this.$store.showcase.data.url_product;
        //this.uuid_product = this.$store.showcase.data.uuid_main;
        //this.title = this.$store.showcase.data.title;
        //this.description = this.$store.showcase.data.description;
        //this.website = this.$store.showcase.data.website;
    },
    methods: {
        on_click_continue() {
            this.error = false;
            this.$api.post({
                url: "/api/showcase_product/",
                data: {
                    step: "product",
                    uuid_product: this.uuid_product,
                    name: this.name,
                    price: this.price,
                    description: this.description,
                },
                success: (resp) => {
                    console.log(resp);
                    this.$router.push("/startup/step6");
                },
                error: (err) => {
                    this.error_message =
                        err === null
                            ? "No se pudo guardar el formulario"
                            : err.error;
                    this.error = true;
                },
            });
        },
    },
};
</script>

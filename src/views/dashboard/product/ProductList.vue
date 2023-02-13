<template>
    <div class="d-flex justify-content-between">
        <div>Ordenado por:</div>
        <rdx-button class="r-bg-red r-plus" @click="on_click_new()"
            >Crear producto</rdx-button
        >
    </div>
    <div class="container">
        <div class="row y-5 g-5" id="projects">
            <!-- class="col-12 col-sm-10 col-sm-8 col-md-6 col-lg-4 col-xl-2" -->
            <div
                v-for="(product, idx) in products"
                :key="idx"
                class="p-1 p-xl-2 col-3 col-sm-3 col-xl-3"
            >
                <!-- <rdx-image-item
                        @click_edit="on_click_edit_item(product)"
                        :url="product.url_product"
                        style="
                            background: linear-gradient(
                                    0deg,
                                    rgba(0, 0, 0, 0.6) 18.04%,
                                    rgba(0, 0, 0, 0) 75.29%
                                ),
                                url(taryn-manning-y3CAU_73jWk-unsplash.jpg);
                            border-radius: 8px;
                        "
                    /> -->

                <div id="<%= dom_id project%>" class="">
                    <div class="project-card">
                        <div class="project-card-container">
                            <div class="project-card-image">
                                <img
                                    :src="product.url_product"
                                    size="400x400"
                                    class="w-100 h-auto"
                                />
                            </div>
                            <div class="project-card-info" aria-hidden="true">
                                <a class="w-100 h-100 position-absolute"></a>
                                <div class="project-card-footer">
                                    <div class="project-footer-optionsx">
                                        <div
                                            @click="on_click_edit_item(product)"
                                            style="
                                                background-color: white;
                                                position: relative;
                                                cursor: pointer;
                                                width: 40px;
                                                height: 40px;
                                                border-radius: 5rem;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                position: absolute;
                                                right: 10px;
                                                top: 10px;
                                            "
                                        >
                                            <i class="bi bi-pencil"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p
                        class="project-card-titlex pt-3 mx-3"
                        style="
                            font-family: 'Roboto';
                            font-style: normal;
                            font-weight: 400; /* font-size: 20px; */
                            line-height: 150%;
                        "
                    >
                        {{ product.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!--   
                   <img 
                     style="width:100%"
                     :src="product.url_product" 
                     :alt="product.name"
                   />
                   {{product.id}}-->
</template>

<script>
/*
import VitrinaInput from "./inputs/VitrinaInput.vue";
import VitrinaImage from "./inputs/VitrinaImage.vue";
import VitrinaTextarea from "./inputs/VitrinaTextarea.vue";
*/

export default {
    props: {},
    data() {
        return {
            products: [],
        };
    },

    components: {},

    beforeCreate() {},

    created() {
        this.$api.get({
            url: [
                [
                    "/api/showcase_product/",
                    {
                        _filter_: [
                            {
                                _op_: "=",
                                showcase_id:
                                    this.$store.session.current_user
                                        .showcase_id,
                            },
                        ],
                    },
                ],
            ],
            success: (resp_products) => {
                console.log("============================");
                console.log(resp_products);
                this.products = resp_products.data.results;
            },
            error: (err) => {
                console.log(err);
            },
        });
    },
    beforeUnmount() {},
    mounted() {},
    methods: {
        /*
      on_click_edit(product) {
          console.log(product);
          this.$store.showcase.product = product;
          this.$router.push('/dashboard/product_form');
      },
      */
        on_click_new() {
            this.$store.showcase.product = null;
            this.$router.push("/dashboard/product_form");
        },

        on_click_edit_item(product) {
            console.log(product);
            this.$store.showcase.product = product;
            this.$router.push("/dashboard/product_form");
        },
    },

    watch: {},
};
</script>

<template>
    <div class="d-flex justify-content-between">
        <h3 v-if="accion == 'edit'">Modifica tu producto</h3>
        <h3 v-if="accion == 'new'">Crea tu producto</h3>

        <rdx-button v-if="accion == 'edit'" @click="on_click_update()"
            >Guardar</rdx-button
        >

        <rdx-button v-if="accion == 'new'" @click="on_click_create()"
            >Crear</rdx-button
        >
    </div>

    <div style="width: 100%; height: 50px">&nbsp;</div>

    <vitrina-form-product
        v-if="show"
        v-model:url_product="url_product"
        v-model:uuid_product="uuid_product"
        v-model:name="name"
        v-model:price="price"
        v-model:description="description"
    />

    <!-- 
    <div class="d-flex justify-content-center">
    
            <rdx-button 
               v-if="accion=='edit'"
               @click="on_click_update()">Guardar</rdx-button>
               
            <rdx-button 
               v-if="accion=='new'"
               @click="on_click_create()">Crear</rdx-button>
    </div> 
-->

    <!-- 
   {{$store.showcase.product}}
--></template>

<script>
/*
import VitrinaInput from "./inputs/VitrinaInput.vue";
import VitrinaImage from "./inputs/VitrinaImage.vue";
import VitrinaTextarea from "./inputs/VitrinaTextarea.vue";
*/

import VitrinaFormProduct from "../../dashboard/vitrina/form/Product.vue";

export default {
    props: {},
    data() {
        return {
            show: false,
            accion: null,

            url_product: null,
            uuid_product: null,
            name: null,
            price: null,
            description: null,
        };
    },

    components: {
        "vitrina-form-product": VitrinaFormProduct,
    },

    beforeCreate() {},

    created() {
        if (this.$u.isNull(this.$store.showcase.product)) {
            console.log("Producto nuevo !!!");
            this.accion = "new";
            this.show = true;
        } else {
            console.log("Editando producto !!!");
            this.$api.get({
                url: [
                    [
                        "/api/showcase_product/" +
                            this.$store.showcase.product.id +
                            "/",
                        null,
                    ],
                ],
                success: (resp_product) => {
                    console.log(resp_product);
                    this.url_product = resp_product.data.url_product;

                    this.uuid_product = resp_product.data.uuid_product;

                    this.name = resp_product.data.name;
                    this.price = resp_product.data.price;
                    this.description = resp_product.data.description;

                    this.accion = "edit";
                    this.show = true;
                },
                error: (err) => {
                    console.log(err);
                },
            });
        }
    },
    beforeUnmount() {},
    mounted() {},
    methods: {
        on_click_update() {
            console.log("on_click_update()");

            var save = () => {
                this.$api.patch({
                    url:
                        "/api/showcase_product/" +
                        this.$store.showcase.product.id +
                        "/",
                    data: {
                        uuid_product: this.uuid_product,
                        name: this.name,
                        price: this.price,
                        description: this.description,
                    },
                    success: (resp) => {
                        console.log(resp);

                        //this.$router.push('/startup/step5');
                    },
                    error: (err) => {
                        this.error_message =
                            err === null
                                ? "No se pudo guardar el formulario"
                                : err.error;
                        this.error = true;
                    },
                });
            };

            this.$gui.confirm_success_back({
                title: "Seguro que desea guardar el producto ?",
                left_click: () => {
                    save();
                },
            });
            /*
          this.$store.global.clear_confirm();
          this.$store.global.confirm = {
               show: true,
               type: 'success',
               title: 'Seguro que desea guardar el producto ?',
               left: {
                   label: 'Si',
                   click: ()=> {
                       save();
                       this.$store.global.clear.confirm();
                   }
               },
               right: {
                   label: 'No',
                   click: ()=> {
                       this.$store.global.clear_confirm();
                   }
               }
          }
          */
        },

        on_click_create() {
            this.$api.post({
                url: "/api/showcase_product/",
                data: {
                    uuid_product: this.uuid_product,
                    name: this.name,
                    price: this.price,
                    description: this.description,
                },
                success: (resp) => {
                    console.log(resp);
                    console.log("LISTO !!!!");
                    this.accion = "edit";
                    //this.$router.push('/startup/step5');
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

    watch: {},
};
</script>

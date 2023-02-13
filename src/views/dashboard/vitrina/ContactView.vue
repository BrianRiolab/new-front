<template>
    <div v-if="show">
        <!-- <vitrina-topbar-list /> -->
        <div class="d-flex justify-content-between">
            <ul class="list-inline d-flex align-items-center mb-0">
                <vitrina-topbar-item
                    label="Descripción"
                    icon="bi-shop"
                    href="/dashboard/vitrina_view"
                />
                <vitrina-topbar-item
                    label="Contacto"
                    icon="bi-envelope"
                    href="/dashboard/contact_view"
                />
                <vitrina-topbar-item
                    label="Ubicación"
                    icon="bi-geo-alt"
                    href="/dashboard/vitrina_location_view"
                />
            </ul>
            <div class="">
                <rdx-button class="btn-dark">Editar</rdx-button>
            </div>
        </div>
        <div class="py-5" style="flex: 1">
            <div class="container">
                <div class="row g-0">
                    <div class="col-12 col-xl-4">
                        <label>Sitio Web</label>
                        <p>www.labaita.cl</p>
                        <label>Email de tu emprendimiento</label>
                        <p>conguilio@labaita.cl</p>
                        <label>Whatsapp</label>
                        <p>+46 9 6780 7644</p>
                    </div>
                    <div class="col-12 col-xl-4">
                        <label>Horario de atención</label>
                        <p>Lunes a viernes: 10:00 a 14:00/ 15:00 a 18:00</p>
                        <p>Sabado y Domingo: 10:00 a 14:00/ 15:00 a 18:30</p>
                        <p>Festivos: 10:00 a 14:00/ 15:00 a 18:30</p>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="mb-3">
                            <icon-facebook class="me-3" />@tu-emprendimiento
                        </div>
                        <div class="mb-3">
                            <icon-instagram
                                class="me-3"
                            />facebook.com/tu-emprendimiento
                        </div>
                        <div class="mb-3">
                            <icon-airbnb class="me-3" />Enlace a tu página de
                            Airbnb
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scope>
.tab-enabled {
    & i {
        opacity: 1;
        font-size: 30px;
    }
    & div {
        color: #000;
        background: #d9f35c;
        font-size: 12px;
        font-weight: 600;
    }
}

.tab-disabled {
    & i {
        opacity: 0.2;
        font-size: 30px;
    }
    & div {
        color: #999;
        background: #fff;
        font-size: 12px;
        font-weight: 600;
    }
}
</style>

<script>
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconAirbnb from "@/components/icons/IconAirbnb.vue";

// import VitrinaFormBusiness from "./form/Business.vue";
// import VitrinaFormMap from "./form/Map.vue";
// import VitrinaFormSocial from "./form/Social.vue";
import TopbarItem from "@/views/startup/components/TopbarItem.vue";

export default {
    data() {
        return {
            show: false,
            show_tab: "business",

            business: {
                url_main: null,
                uuid_main: null,
                title: null,
                description: null,
                website: null,
            },
            social: {},

            //rdx_user : new URL('@/assets/images/rdx-user.png',import.meta.url) //require('@/assets/images/rdx-user.png'),
        };
    },
    components: {
        // "vitrina-form-business": VitrinaFormBusiness,
        // "vitrina-form-map": VitrinaFormMap,
        // "vitrina-form-social": VitrinaFormSocial,
        "vitrina-topbar-item": TopbarItem,
        "icon-facebook": IconFacebook,
        "icon-instagram": IconInstagram,
        "icon-airbnb": IconAirbnb,
    },

    created() {
        this.$api.get({
            url: [
                [
                    "/api/showcase/" +
                        this.$store.session.current_user.showcase_id +
                        "/",
                    null,
                ],
            ],
            success: (resp_showcase) => {
                console.log("============================");
                console.log(resp_showcase);

                this.business.url_main = resp_showcase.data.url_main;
                this.business.uuid_main = resp_showcase.data.uuid_main;
                this.business.title = resp_showcase.data.title;
                this.business.description = resp_showcase.data.description;
                this.business.website = resp_showcase.data.website;

                this.social.instagram = resp_showcase.data.instagram;
                this.social.facebook = resp_showcase.data.facebook;
                this.social.airbnb = resp_showcase.data.airbnb;

                this.show_tab = "business";
                this.show = true;
                /*
                this.show = true;
                this.$store.showcase.data = resp_showcase.data;
                this.$store.showcase.products = resp_products.data.results;
                */
            },
            error: (err) => {
                console.log(err);
            },
        });
    },
    beforeUnmount() {},
    mounted() {},
    methods: {
        on_click_tab(tab) {
            this.show_tab = tab;
            switch (tab) {
                case "business":
                    //this.show_tab = '';
                    //this.$router.push({ path:'/dashboard/home_index' });
                    break;
                case "map":
                    //this.$router.push({ path:'/dashboard/vitrina_index' });
                    break;
                case "social":
                    //this.$router.push({ path:'/dashboard/products_index' });
                    break;
                default:
                    break;
            }
        },

        on_click_save() {
            this.$api.patch({
                url:
                    "/api/showcase/" +
                    this.$store.session.current_user.showcase_id +
                    "/",
                data: {
                    uuid_main: this.business.uuid_main,
                    title: this.business.title,
                    description: this.business.description,
                    website: this.business.website,

                    instagram: this.social.instagram,
                    facebook: this.social.facebook,
                    airbnb: this.social.airbnb,
                },
                success: (resp) => {
                    console.log(resp);
                    console.log("LISTO !!!");
                    //this.$router.push('/startup/step3');
                },
                error: (err) => {
                    console.log(err);
                },
            });
        },
    },
};
</script>

<template>
    <div class="row g-4 px-xl-4 mx-xl-4">
        <div class="col-12 col-xl-4">
            <vitrina-input
                label="Sitio web"
                placeholder="www.example.com"
                class=""
            />
            <vitrina-input
                label="Email de tu emprendimiento"
                placeholder="example@gmail.com"
                class=""
            />
            <vitrina-input
                label="Whatsapp"
                placeholder="+56 9 1234 5678"
                class=""
            />
        </div>
        <div class="col-12 col-xl-4">
            <vitrina-textarea
                label="Horario de atención"
                placeholder="Lunes a viernes: 10:00 a 14:00/ 15:00 a 18:30"
            />
        </div>
        <div class="col-12 col-xl-4">
            <vitrina-social-item
                social="Instagram"
                description="Comparte tu dirección Instagram en RDx."
                image="instagram"
                v-model:value="local_instagram"
                placeholder="@tu-emprendimiento"
            />
            <vitrina-social-item
                social="Facebook"
                description="Comparte tu dirección Facebook en RDx."
                image="facebook"
                placeholder="facebook.com/tu-emprendimiento"
                v-model:value="local_facebook"
            />
            <vitrina-social-item
                social="Airbnb"
                description="Comparte tu dirección Airbnb en RDx."
                image="airbnb"
                placeholder="Enlace de tu página Airbnb"
                v-model:value="local_airbnb"
            />
        </div>
    </div>
</template>

<script>
import VitrinaInput from "./inputs/VitrinaInput.vue";
import VitrinaTextarea from "./inputs/VitrinaTextarea.vue";
import VitrinaSocialItem from "./inputs/VitrinaSocialItem.vue";

export default {
    props: {
        instagram: { default: null },
        facebook: { default: null },
        airbnb: { default: null },
    },
    data() {
        return {
            local_instagram: null,
            local_facebook: null,
            local_airbnb: null,
        };
    },
    components: {
        "vitrina-social-item": VitrinaSocialItem,
        "vitrina-input": VitrinaInput,
        "vitrina-textarea": VitrinaTextarea,
    },

    created() {
        this.local_instagram = this.instagram;
        this.local_facebook = this.facebook;
        this.local_airbnb = this.airbnb;
        console.log("INSTAGRAM ::  22222 " + this.local_instagram);
    },
    beforeUnmount() {},
    mounted() {},
    methods: {},

    watch: {
        local_instagram(newValue, oldValue) {
            this.$emit("update:instagram", newValue);
        },
        local_facebook(newValue, oldValue) {
            this.$emit("update:facebook", newValue);
        },
        local_airbnb(newValue, oldValue) {
            this.$emit("update:airbnb", newValue);
        },
    },
};
</script>

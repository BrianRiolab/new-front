<template>
    <div class="vitrina-steps">
        <ul
            class="list-inline d-flex align-items-center justify-content-between"
        >
            <vitrina-topbar-item
                label="1. Actividad"
                icon="bi-toggle-on"
                href="/startup/step1"
            />
            <vitrina-topbar-item
                label="2. Descripción"
                icon="bi-shop"
                href="/startup/step2"
            />
            <vitrina-topbar-item
                label="3. Contacto"
                icon="bi-envelope"
                href="/startup/step3"
            />
            <vitrina-topbar-item
                label="4. Ubicación"
                icon="bi-geo-alt"
                href="/startup/step4"
            />
            <vitrina-topbar-item
                label="5. Agregar un producto"
                icon="bi-plus-lg"
                href="/startup/step5"
            />
            <vitrina-topbar-item
                label="6. Enviar a aprobación"
                icon="bi-stars"
                href="/startup/step6"
            />
            <!-- bi-toggle-on -->
            <!-- bi-shop -->
            <!-- bi-envelope -->
            <!-- bi-geo-alt -->
            <!-- bi-plus-lg -->
            <!-- bi-stars -->
        </ul>
    </div>
</template>

<script>
import TopbarItem from "@/views/startup/components/TopbarItem.vue";
export default {
    data() {
        return {};
    },
    components: {
        "vitrina-topbar-item": TopbarItem,
    },
};
</script>

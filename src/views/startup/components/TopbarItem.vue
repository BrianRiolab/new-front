<template>
    <li
        class="list-inline-item mx-0 ms-xl-3"
        :class="{
            active: isCurrentPage(),
            'locked-step': isLockedStep(),
            'unlocked-step': !isLockedStep(),
        }"
        @click="onClick"
    >
        <span class="badge badge-primary rounded-circle mr-3">
            <!-- import svg from folder -->
            <icon-toggle-filter v-if="icon === 'bi-toggle-on'" />
            <icon-shop v-if="icon === 'bi-shop'" />
            <icon-contact v-if="icon === 'bi-envelope'" />
            <icon-location v-if="icon === 'bi-geo-alt'" />
            <icon-add-product v-if="icon === 'bi-plus-lg'" />
            <icon-new v-if="icon === 'bi-stars'" />

            <!-- <i class="bi" v-bind:class="icon"></i> -->
        </span>
        <p class="d-xl-block d-none">{{ label }}</p>
    </li>
</template>

<style scoped lang="scss">
li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    cursor: pointer;
    transition: text-underline-offset 0.3s ease;
    text-underline-offset: 1px;
    .badge-primary {
        color: black;
    }
    &:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
}
li.locked-step {
    opacity: 0.25;
    &:hover {
        text-decoration: none;
        text-underline-offset: 1px;
    }
}
li.unlocked-step {
    .badge-primary {
        background-color: black;
        border: 1px solid black;
        color: white;
        transition: all 0.3s ease;
    }
}
li.active {
    .badge-primary {
        background-color: black;
        border: 1px solid black;
        color: white;
    }
    &.unlocked-step {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
}

p {
    margin-bottom: 0;
}
.badge-primary {
    background-color: transparent;
    border: 1px solid black;
    // border-radius: 50%;
    // width: 40px;
    // height: 40px;
    // display: inline-flex;
    // align-items: center;
    // justify-content: center;

    // background-color: white;
    // border: 2px solid #007bff;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.bi {
    font-size: 1.5em;
    color: black;
}
</style>
<script>
import IconToggleFilter from "@/components/icons/IconToggleFilter.vue";
import IconLocation from "@/components/icons/IconLocation.vue";
import IconAddProduct from "@/components/icons/IconAddProduct.vue";
import IconShop from "@/components/icons/IconShop.vue";
// import IconCalendar from "@/components/icons/IconCalendar.vue";
// import IconClock from "@/components/icons/IconClock.vue";
// import IconPlus from "@/components/icons/IconPlus.vue";
// import IconStar from "@/components/icons/IconStar.vue";
// import IconCheck from "@/components/icons/IconCheck.vue";
import IconNew from "@/components/icons/IconNew.vue";
import IconContact from "@/components/icons/IconContact.vue";
export default {
    data() {
        return {};
    },
    props: {
        label: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            required: true,
        },
    },
    components: {
        "icon-toggle-filter": IconToggleFilter,
        "icon-location": IconLocation,
        "icon-new": IconNew,
        "icon-contact": IconContact,
        "icon-add-product": IconAddProduct,
        "icon-shop": IconShop,
    },
    methods: {
        isCurrentPage() {
            return this.$route.path === this.href;
        },
        // isStepPassed() {
        //     let number = this.href.split("step")[1];
        //     let currentStep = this.$route.path.split("step")[1];

        //     if (number > currentStep) {
        //         return false;
        //     }

        //     return true;
        // },
        isLockedStep() {
            //poner la logica para saber si el boton ya esta bloqueado
            let number = this.href.split("step")[1];
            let currentStep = this.$route.path.split("step")[1];

            if (number > currentStep) {
                return true;
            }

            return false;
        },
        onClick() {
            if (!this.isLockedStep()) {
                this.$router.push(this.href);
            }
        },
    },
};
</script>

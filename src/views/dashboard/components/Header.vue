<template>
    <header class="dashboard-header mb-4 pb-2">
        <div class="d-flex justify-content-between">
            <!-- TITULO -->
            <div class="position-relative col-4 col-xl-2">
                <icon-logo-isotype
                    class="position-absolute left-0 bottom-0 d-none d-xl-block"
                    style="max-height: 60px; left: -10px"
                />
                <icon-logo-name class="p-0 ps-xl-5 w-100" />
                <!-- <img
                    :src="require(`@/assets/icons/logo.png`)"
                    alt="logo"
                    height="65"
                    style="margin-top: -35px; margin-left: 10px"
                /> -->
                <h4 class="m-0">{{ this.$store.global.header_title }}</h4>
            </div>

            <div>&nbsp;</div>

            <!-- AVATAR -->
            <div class="d-flex">
                <div
                    class="center me-3 text-time no-selectable"
                    data-controller="live-date"
                >
                    <span class="header-text-color" data-live-date-target="date"
                        >Miercoles | 08:59</span
                    >
                </div>
                <div class="btn-group avatar">
                    <div
                        class="img no-selectable"
                        style="width: 36px; height: 36px"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {{ this.get_avatar() }}
                    </div>

                    <ul class="dropdown-menu dropdown-menu-end mt-2">
                        <li>
                            <button
                                class="dropdown-item d-flex"
                                type="button"
                                @click="on_click_current_user()"
                            >
                                <div class="me-3">
                                    <icon-user />
                                </div>
                                Mi perfil
                            </button>
                        </li>
                        <li>
                            <button
                                class="dropdown-item disabled d-flex"
                                type="button"
                            >
                                <div class="me-3">
                                    <icon-settings />
                                </div>
                                Ajustes
                            </button>
                        </li>
                        <li>
                            <hr
                                class="dropdown-divider mx-3 bg-black opacity-25"
                            />
                        </li>
                        <li>
                            <button
                                class="dropdown-item"
                                type="button"
                                @click="on_click_logout()"
                            >
                                Cerrar sesión
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- <div
                    class="avatar m-0"
                    @click="show_avatar_dropdown = !show_avatar_dropdown"
                >
                    <img
                class="rounded-circle"
                src="@/assets/img/rdx-user.png"
                alt="user"
                style="width: 36px; height: 36px"
                />

                    <div
                        v-if="show_avatar_dropdown"
                        class="dropdown-menu dropdown-menu-end show"
                    >
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Cerrar sesión</a>
                        <div class="row">
                            <div class="item" @click="on_click_current_user()">
                                Editar mi prfil
                            </div>
                            <hr class="hr" style="z-index: 0" />
                            <div class="item" @click="on_click_logout()">
                                Cerrar sesión
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>

        <!-- Subrrallado -->
        <hr class="hr underlined m-0 mt-1" style="z-index: 0" />
    </header>
</template>

<script>
export default {
    data() {
        return {
            show_avatar_dropdown: false,
            current_user: { avatar: false },
        };
    },
    components: {},

    created() {},
    beforeUnmount() {},
    mounted() {},
    methods: {
        on_click_current_user() {
            this.$router.push("/dashboard/current_user");
        },
        on_click_logout() {
            this.$store.showcase.clear_all();
            this.$store.global.clear_all();
            this.$store.session.clear_all();
            this.$router.push("/session/login");
        },
        get_avatar() {
            var name = this.$store.session.current_user.name;
            var initials = name.match(/\b\w/g) || [];
            return initials.splice(0, 2).join("").toUpperCase();
        },
    },

    watch: {
        $route(newValue, oldValue) {
            // Put your logic here...
            console.log("___________");
            console.log(newValue);
            this.$store.global.header_title = "";
            switch (newValue.fullPath) {
                case "/dashboard/current_user":
                    this.$store.global.header_title = "Mi perfil";
                    break;
                case "/dashboard/vitrina_form":
                    this.$store.global.header_title = "Mi eprendimiento";
                    break;
                case "/dashboard/vitrina_list":
                    this.$store.global.header_title = "Emprendimientos";
                    break;
                case "/dashboard/product_form":
                    this.$store.global.header_title = "Producto de vitrina";
                    break;
                case "/dashboard/product_list":
                    this.$store.global.header_title = "Mi vitrina de productos";
                    break;
                case "/dashboard/training":
                    this.$store.global.header_title = "Capacitaciones";
                    break;
            }
        },
    },
};
</script>

<!-- //implementar para que la hora funcionae
connect() {
    this.updateDate()
    this.interval = setInterval(() => this.updateDate(), 1000)
  }

  disconnect() {
    clearInterval(this.interval)
  }

  updateDate() {
    //Format day and time
    const date = new Date()
    const day = date.toLocaleDateString('es-CL', { weekday: 'long' })
    const time = date.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', hour12: false })
    //uppercase first letter
    this.dateTarget.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)}  |  ${time}`
    // this.dateTarget.textContent = `${day} ${time}`
  } -->

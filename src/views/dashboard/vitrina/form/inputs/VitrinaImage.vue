<template>
    <div class="dropzone-cover dropzone-type-roundrect" v-bind="getRootProps()">
        <div class="dropzone-card image">
            <div
                class="dropzone dz-started"
                data-controller="dropzone"
                data-dropzone-max-file-size="255"
                data-dropzone-max-files="1"
                data-dropzone-target="root"
            >
                <input
                    v-bind="getInputProps()"
                    class="d-none"
                    required
                    accept="image/png,image/jpeg"
                    direct_upload="true"
                    data-dropzone-target="input"
                />

                <!-- SIN IMAGEN CARGADA -->
                <div v-if="isEmpty" class="dropzone-empty center">
                    <!-- cross -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        preserveAspectRatio="none"
                        class="w-100 h-100"
                    >
                        <path class="line-svg" d="M 20,20 L 39,39"></path>
                        <path class="line-svg" d="M 20,20 L 1,39"></path>
                        <path class="line-svg" d="M 20,20 L 39,1"></path>
                        <path class="line-svg" d="M 20,20 L 1,1"></path>
                    </svg>
                </div>

                <!-- ESTOY EJECUTANDO DRAG -->
                <div v-if="isDragActive" class="dropzone-drag">
                    <div class="dropzone-drag-content">Suelta tu imagen..</div>
                </div>

                <!-- SE ESTA HACIENDO EL UPLOAD O DOWNLOAD  -->
                <div
                    v-if="isUploading || isDownloading"
                    class="dropzone-uploading"
                >
                    <div class="dropzone-uploading-content">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>

                <!-- TENGO UNA IMAGEN CARGADA -->
                <div
                    v-if="!isEmpty"
                    class="dz-preview dz-processing dz-success dz-complete"
                    data-dropzone-target="preview"
                >
                    <div class="dz-image" :id="id_div_canvas">
                        <canvas
                            style="background: #fff; display: block"
                            :id="id_canvas"
                        />

                        <!-- <%= image_tag cover_rect(image),  size: '600x600','data-dz-thumbnail': '' %> -->
                    </div>

                    <!--
                    <div class="dz-details h-100 w-100">
                         <%= link_to image, download: image.blob.filename.to_s , target: :_blank, class: 'dz-download w-100 h-100' do %>
          <%=content_tag :span, t('.download')%>
        <%end%> 
                    </div>
                    -->
                    <!-- 
                    <a  
                        v-if="!isUploading"
                        class="dz-remove"
                        href="javascript:undefined;"
                    >
                    </a>
                    -->
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.line-svg {
    fill: none;
    stroke: #c6c6c6;
    stroke-width: 1px;
    vector-effect: non-scaling-stroke;
    shape-rendering: geometricPrecision;
}
.dropzone-card {
    width: 100%;
    height: 100%;
    background: transparent
        linear-gradient(rgba(255, 255, 255, 0.67), rgba(255, 255, 255, 0.2)) 0%
        0% no-repeat padding-box;
    box-shadow: 3px 7px 8px rgba(0, 0, 0, 0.168627451);
    border-radius: 11px;
    overflow: hidden;

    .dropzone {
        background-color: #f5f5f5 !important;
        // aspect-ratio: 400/400;
        width: 100%;
        min-height: auto;
        border: none;
        position: relative;
        opacity: 1;

        .dropzone-empty {
            background-color: white;
            width: 100%;
            height: 100%;
            border: 1px dashed #6f6f6f;
            border-radius: 11px;
            margin: 0;
            display: block !important;
        }

        .dropzone-uploading {
            background-color: rgba(0, 0, 0, 0.2);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            .dropzone-uploading-content {
                position: absolute;
                z-index: 1031;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .dropzone-drag {
            background-color: rgba(0, 0, 0, 0.2);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            .dropzone-drag-content {
                background: #ff0;
                position: absolute;
                z-index: 1031;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}
</style>

<script>
import { useDropzone } from "vue3-dropzone";
import { getCurrentInstance, ref, watch, onMounted } from "vue";
import axios from "axios";

export default {
    props: {
        url: { default: null },
        uuid: { default: null },
        type_ch: { default: null },
        product_id: { default: null },
    },
    emits: ["update:uuid"],
    setup(props, context) {
        const instance = getCurrentInstance();
        const { $api, $store, $u } =
            instance.appContext.config.globalProperties;

        const state = ref("EMPTY");

        const isUploading = ref(false);
        const isDownloading = ref(false);
        const isEmpty = ref(true);

        //const local_uuid = ref(props.uuid);
        const url_img = ref(props.url);

        const id_div_canvas = "_" + Math.random();
        const id_canvas = "_" + Math.random();

        /*
    watch(isDragActive, (newValue, oldValue) => {
        console.log(newValue);
    });
  */

        onMounted(() => {
            if ($u.isNotNull(props.url)) {
                isDownloading.value = true;
                isEmpty.value = false;
                var img = new Image();
                img.src = props.url; //e.target.files[0]);
                img.onload = function () {
                    isDownloading.value = false;
                    console.log(img.width);
                    showImg(img, img.width, img.height);
                };
            }
        });

        function showImg(img, w, h) {
            var canvas = document.getElementById(id_canvas);

            canvas.width = 400;
            canvas.height = 400;
            canvas.style.width = "400px";
            canvas.style.height = "400px";

            var dc = document.getElementById(id_div_canvas);
            var wrh = w / h; //resp.data.width  / resp.data.height;
            var newWidth = dc.offsetWidth;
            var newHeight = newWidth / wrh;

            if (newHeight > dc.offsetHeight) {
                newHeight = dc.offsetHeight;
                newWidth = newHeight * wrh;
            }
            var xOffset =
                newWidth < dc.offsetWidth ? (dc.offsetWidth - newWidth) / 2 : 0;
            var yOffset =
                newHeight < dc.offsetHeight
                    ? (dc.offsetHeight - newHeight) / 2
                    : 0;
            canvas
                .getContext("2d")
                .drawImage(img, xOffset, yOffset, newWidth, newHeight);
        }

        function onDrop(acceptFiles, rejectReasons) {
            console.log(acceptFiles[0]);

            var formData = new FormData();
            formData.append("file", acceptFiles[0]);
            formData.append("type_ch", new Blob([props.type_ch]));
            formData.append("product_id", new Blob([props.product_id]));
            formData.append(
                "name",
                new Blob(["nombre imagen si se requiere..."])
            );
            formData.append(
                "description",
                new Blob(["descripcion imagen si se requiere..."])
            );

            state.value = "UPLOADING";
            isUploading.value = true;

            var token =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjc1MzEyMDQxLjk2MzczMjUsInNob3djYXNlX2lkIjoxLCJwcm9maWxlX2NoIjoiRU5UUkVQUkVORVVSIn0.f_0NmBsrp8Wlq_lgeQRjZ6-n7saQqJiSpRWHpW7srVs";
            axios
                .post("/api/showcase_upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: "Bearer " + token, //$store.session.token,
                    },
                })
                .then((resp) => {
                    console.log(resp.data);

                    //local_uuid.value =   resp.data.uuid;
                    context.emit("update:uuid", resp.data.uuid);

                    url_img.value = resp.data.url;
                    isEmpty.value = false;

                    //var ctx = document.getElementById("id_canvas").getContext('2d');
                    var img = new Image();
                    img.src = URL.createObjectURL(acceptFiles[0]); //e.target.files[0]);
                    img.onload = function () {
                        state.value = "NOT_EMPTY";

                        var ff = () => {
                            try {
                                showImg(img, resp.data.width, resp.data.height);

                                isUploading.value = false;
                            } catch (e) {
                                console.log(e);

                                setTimeout(ff, 500);
                            }
                        };

                        setTimeout(ff, 0);
                    };
                })
                .catch((error) => {
                    isUploading.value = false;
                    console.log(error.response);
                });
        }

        const { getRootProps, getInputProps, isDragActive, ...rest } =
            useDropzone({ onDrop });

        console.log(rest);

        watch(isDragActive, (newValue, oldValue) => {
            if (newValue) {
                state.value = "DRAG_ACTIVE";
            } else {
                console.log(url_img.value);
                if ($u.isNull(url_img.value)) {
                    state.value = "EMPTY";
                } else {
                    state.value = "NOT_EMPTY";
                }
            }
        });

        watch(url_img, (newValue, oldValue) => {
            console.log("url_img: " + newValue);
        });
        watch(isUploading, (newValue, oldValue) => {
            console.log("isUploading: " + newValue);
        });

        return {
            getRootProps,
            getInputProps,
            isDragActive,
            ...rest,
            id_div_canvas,
            id_canvas,
            state,
            url_img,
            isEmpty,
            isUploading,
        };
    },
};
</script>

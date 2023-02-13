<template>
    <div class="form-floating mb-3">
        <input 
        v-bind:class="'form-control'"
        :type="type"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :isRequired="isRequired"
        v-model="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"
        v-bind="$attrs"
        />
        <label :for="id">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: "rdx-input",
    props: {
        id: 
        {
            type: String,
            required: true
        },
        name: String,
        label: String,
        placeholder: String,
        type: String,
        isRequired: 
        {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            modelValue: null,
        };
    },
}
</script>
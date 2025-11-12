<script setup>
import { ref } from 'vue'

const props = defineProps({
    id: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue" :required="required"
        :disabled="disabled" @input="emit('update:modelValue', $event.target.value)"
        class="border border-zinc-700 rounded p-2 w-full bg-zinc-800 text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
</template>

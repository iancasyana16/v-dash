<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    modelValue: [String, Number],
    options: {
        type: Array,
        required: true,
        // contoh: [{ label: 'Admin', value: 'admin' }, { label: 'User', value: 'user' }]
    },
    id: String,
    label: String,
    placeholder: {
        type: String,
        default: 'Pilih opsi...'
    }
})

const emit = defineEmits(['update:modelValue'])

function handleChange(event) {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
    <div class="flex flex-col space-y-1">
        <label v-if="label" :for="id" class="text-sm text-gray-300">{{ label }}</label>
        <select :id="id"
            class="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            :value="modelValue" @change="handleChange">
            <option disabled value="">{{ placeholder }}</option>
            <option v-for="(opt, index) in options" :key="index" :value="opt.value">
                {{ opt.label }}
            </option>
        </select>
    </div>
</template>

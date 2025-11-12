<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    id: String,
    label: String,
    required: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])

function handleChange(event) {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
    <div class="flex flex-col space-y-1">
        <label v-if="label" :for="id" class="text-sm text-gray-300">
            {{ label }}
            <span v-if="required" class="text-red-500">*</span>
        </label>

        <input :id="id" type="date" :value="modelValue" @input="handleChange"
            class="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
    </div>
</template>

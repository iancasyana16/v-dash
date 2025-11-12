<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    forId: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <label :for="forId" class="block text-sm font-semibold text-emerald-500 mb-1">
        {{ text }}
        <span v-if="required" class="text-red-500">*</span>
    </label>
</template>

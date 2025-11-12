<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    variant: {
        type: String,
        default: 'primary' // opsi: primary | danger | outline | success | warning
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

// Kelas CSS berdasarkan variant
const baseClass =
    'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none w-full'

const variants = {
    primary:
        'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700',
    danger:
        'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
    outline:
        'border border-emerald-500 text-emerald-500 hover:bg-emerald-600 hover:text-white',
    success:
        'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
    warning:
        'bg-yellow-500 text-black hover:bg-yellow-600 active:bg-yellow-700'
}
</script>

<template>
    <button :type="type" :disabled="disabled" :class="[
        baseClass,
        variants[variant] || variants.primary,
        disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]">
        <slot />
    </button>
</template>

<script setup>
import { Palette } from 'lucide-vue-next';
</script>

<template>
    <header class="bg-emerald-500 shadow-md rounded-lg h-16 px-6 py-4 flex justify-between items-center">
        <h1 class="text-xl font-semibold text-zinc-900">Dashboard</h1>
        <div class="flex items-center gap-4">
            <div class="bg-zinc-900 text-white rounded-xl p-2 cursor-pointer">
                <Palette />
            </div>
        </div>
    </header>
</template>
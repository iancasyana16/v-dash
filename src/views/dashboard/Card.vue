<script setup>
import DashboardLayout from '@/components/layouts/DashboardLayout.vue';
import { CircleDollarSign } from 'lucide-vue-next';
</script>

<template>
    <DashboardLayout>
        <div class="flex items-center border rounded-lg border-zinc-900 p-5">
            <div class="bg-emerald-500 p-2">
                <CircleDollarSign />
            </div>
        </div>
    </DashboardLayout>
</template>
<script setup>
import Button from '@/components/ui/button/Button.vue';
import DashboardLayout from '@/components/layouts/DashboardLayout.vue';
</script>

<template>
    <DashboardLayout>
        <div class="flex gap-4">
            <Button :variant="'primary'" @click="$router.push('/404')">
                404 Not Found
            </Button>
            <Button :variant="'primary'" @click="$router.push('/403')">
                403 Forbidden
            </Button>
        </div>
    </DashboardLayout>
</template>
<script setup>
import DashboardLayout from '@/components/layouts/DashboardLayout.vue';
</script>

<template>
    <DashboardLayout>
        <div
            class="h-screen bg-linear-to-br from-emerald-500 via-green-500 to-emerald-900 flex items-center justify-center">
            <div class="bg-zinc-900 bg-opacity-90 rounded-2xl shadow-2xl max-w-lg w-full p-10 text-center">
                <span class="text-9xl font-extrabold text-emerald-800">403</span>
                <h1 class="text-3xl font-semibold mt-4 text-gray-700">Forbidden</h1>
                <p class="mt-4 text-gray-600">
                    Ooops... You dont have permission access to this resource.
                </p>
                <button
                    class="mt-6 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                    @click="$router.push('/pages')">
                    Go Home
                </button>
            </div>
        </div>
    </DashboardLayout>
</template>
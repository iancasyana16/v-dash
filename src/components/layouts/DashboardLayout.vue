<script setup>
import Sidebar from '../Sidebar.vue';
import Navbar from '../Navbar.vue';


</script>

<template>
    <div class="flex h-screen bg-zinc-950 p-1 gap-2">
        <!-- Sidebar -->
        <Sidebar/>
        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <!-- Header -->
            <Navbar />
            <!-- Content Area -->
            <main class="flex-1 overflow-y-auto mt-3 rounded-xl">
                <slot />
            </main>
        </div>
    </div>
</template>

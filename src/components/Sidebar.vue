<script setup>
import { ref, computed } from 'vue'
import logo from '@/assets/logo.svg'
import { LayoutDashboard, Blocks, Pencil, StickyNote } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'

const isCollapsed = ref(false)
const route = useRoute()

const navigation = [
    { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
    { title: 'Card', url: '/card', icon: Blocks },
    { title: 'Input', url: '/input', icon: Pencil },
    { title: 'Pages', url: '/pages', icon: StickyNote },
]

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
}

// Fungsi untuk cek apakah link aktif
const isActive = (url) => route.path === url
</script>

<template>
    <aside :class="[
        'bg-zinc-900 text-white flex flex-col rounded transition-all duration-300 overflow-auto',
        isCollapsed ? 'w-16' : 'w-64'
    ]">
        <!-- Header / Logo -->
        <div class="p-4 flex items-center justify-center cursor-pointer bg-zinc-800 sticky top-0"
            @click="toggleSidebar">
            <img :src="logo" :class="isCollapsed ? 'w-8 h-8' : 'w-10 h-10'" alt="Logo" />
        </div>

        <!-- Navigation -->
        <nav class="flex-1 p-2 space-y-1 mt-2">
            <div v-for="item in navigation" :key="item.title">
                <!-- Jika tidak punya anak -->
                <RouterLink :to="item.url"
                    class="group flex items-center space-x-3 px-3 py-2 rounded transition-colors duration-200 cursor-pointer"
                    :class="isActive(item.url)
                        ? 'bg-emerald-500 text-emerald-950'
                        : 'text-white hover:bg-emerald-500 hover:text-emerald-950'">
                    <component :is="item.icon" class="w-6 h-6" />
                    <span v-if="!isCollapsed" class="font-semibold whitespace-nowrap">{{ item.title }}</span>
                </RouterLink>
            </div>
        </nav>

        <!-- Logout -->
        <div class="p-4 cursor-pointer hover:bg-red-600 text-center font-semibold">Logout</div>
    </aside>
</template>


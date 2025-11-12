<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import logo from '@/assets/logo.svg'
import Label from '@/components/ui/label/Label.vue'
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'

const router = useRouter()
const username = ref('')
const password = ref('')
const isLoading = ref(false)
const showToast = ref(false)
const toastMessage = ref('')

async function handleLogin(e) {
    e.preventDefault()
    isLoading.value = true

    await new Promise(resolve => setTimeout(resolve, 1000))

    if (username.value.trim() === 'ian' && password.value.trim() === 'casyana') {
        await new Promise(resolve => setTimeout(resolve, 1000))
        router.push('/dashboard')
    } else {
        isLoading.value = false
        toastMessage.value = 'Error! User Not Found.'
        showToast.value = true

        // Hilangkan toast otomatis setelah 3 detik
        setTimeout(() => {
            showToast.value = false
        }, 3000)
    }
}
</script>

<template>
    <AuthLayout>
        <div class="bg-zinc-900 rounded-xl p-5 min-w-md flex flex-col">
            <div class="m-auto mb-3">
                <img :src="logo" alt="logo" class="w-20 h-20" />
            </div>

            <form @submit="handleLogin" class="space-y-4">
                <div class="mb-1">
                    <Label text="Username" for-id="username" />
                    <Input type="text" id="username" v-model="username" />
                </div>
                <div class="mb-3">
                    <Label text="Password" for-id="password" />
                    <Input type="password" id="password" v-model="password" />
                </div>
                <div class="mb-2">
                    <Button type="submit">
                        <template v-if="isLoading">
                            <svg class="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z">
                                </path>
                            </svg>
                        </template>
                        <template v-else>Login</template>
                    </Button>
                </div>
            </form>
        </div>

        <!-- ✅ Floating Toast -->
        <transition name="fade">
            <div v-if="showToast"
                class="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
                {{ toastMessage }}
            </div>
        </transition>
    </AuthLayout>
</template>

<style scoped>
/* Animasi sederhana untuk toast */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.3s ease-out;
}
</style>

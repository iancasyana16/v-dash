<script setup>
import DashboardLayout from '@/components/layouts/DashboardLayout.vue';
import Label from '@/components/ui/label/Label.vue';
import Input from '@/components/ui/input/Input.vue';
import Select from '@/components/ui/input/Select.vue';
import DatePicker from '@/components/ui/input/DatePicker.vue';

const roleOptions = [
    { label: 'Administrator', value: 'admin' },
    { label: 'User', value: 'user' },
    { label: 'Guest', value: 'guest' }
]
</script>

<template>
    <DashboardLayout>
        <div class="space-y-5 p-5">
            <div class="mb-3">
                <Label :text="'Username'" :for-id="'username'" />
                <Input :type="'text'" :id="'username'" :placeholder="'username'" />
            </div>
            <div class="mb-3">
                <Label :text="'Password'" :for-id="'password'" />
                <Input :type="'password'" :id="'password'" :placeholder="'password'" />
            </div>
            <div class="mb-3">
                <Label :text="'Select'" :for-id="'select'" />
                <Select v-model="role" :options="roleOptions" placeholder="Select" />
            </div>
            <div class="mb-3">
                <Label :text="'Date'" :for-id="'date'" />
                <DatePicker v-model="tanggal" id="date" required />
            </div>
        </div>
    </DashboardLayout>
</template>
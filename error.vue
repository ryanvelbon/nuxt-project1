<template>
    <div class="h-screen bg-white flex flex-col items-center justify-center space-y-6">
        <h2 class="text-7xl font-bold text-primary-600">{{ error.statusCode }}</h2>
        <p class="text-gray-700 text-lg">{{ error.message }}</p>
        <button class="btn btn-primary" @click="handleError">Go Home...</button>
    </div>    
</template>

<script setup>
defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>
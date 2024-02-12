<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
    <div class="container">
        <h1 class="text-4xl font-bold mb-12">Shop</h1>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="product in products">
                <ProductCard :product="product" :key="product.id" />
            </div>
        </ul>
    </div>
</template>

<style scoped>

</style>


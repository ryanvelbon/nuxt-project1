<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
    <div class="container">
        <h1 class="text-4xl font-bold mb-12">Shop</h1>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="product in products" :key="product.id" class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img :src="product.image" :alt="product.title" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <NuxtLink :to="`/products/${product.id}`">
                                <span aria-hidden="true" class="absolute inset-0" />
                                {{ product.title }}
                            </NuxtLink>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">{{ product.category }}</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$ {{ product.price }}</p>
                </div>
            </div>
        </ul>
    </div>
</template>

<style scoped>

</style>


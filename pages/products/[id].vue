<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}
</script>

<template>
    <Head>
        <Title>Nuxt | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
    </Head>
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
                <h1 class="text-2xl font-bold text-gray-800 mb-4">{{ product.title }}</h1>
                <p class="text-gray-700">{{ product.description }}</p>
            </div>
            <div>
                <img :src="product.image" alt="" class="h-full w-full object-cover object-center" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
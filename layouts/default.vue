<script setup>
const isScrolled = ref(false)
function handleScroll() {
    isScrolled.value = window.scrollY > 0
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const cartStore = useCartStore()

</script>

<template>
    <header>
        <div
            class="fixed top-0 w-full z-20 bg-white"
            :class="isScrolled ? 'shadow-lg' : ''"
        >
            <div class="container flex justify-between py-4">
                <NuxtLink to="/">Home</NuxtLink>
                <nav>
                    <ul class="flex space-x-8">
                        <li><NuxtLink to="/products">Shop</NuxtLink></li>
                        <li><NuxtLink to="/cart">Cart</NuxtLink></li>
                        <li><button @click="cartStore.toggle">🛒</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <SlideOverCart />

    <main class="pt-24">
        <slot />
    </main>
</template>

<style scoped>
.router-link-exact-active {
    @apply text-primary-500;
}
</style>
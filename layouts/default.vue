<script setup>

</script>

<template>
    <header>
        <NuxtLink to="/">Home</NuxtLink>
        <nav>
            <ul>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/services">Services</NuxtLink></li>
            </ul>
        </nav>
    </header>

    <main>
        <slot />
    </main>
</template>

<style scoped>
.router-link-exact-active {
    color: #4f3;
}
</style>
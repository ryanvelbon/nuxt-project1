export const useCartStore = defineStore('cart', {
    state: () => ({
        isOpen: false,
    }),
    actions: {
        toggle() {
            this.isOpen = !this.isOpen
        },
        close() {
            this.isOpen = false
        },
    },
})

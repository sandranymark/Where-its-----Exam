import { create } from 'zustand';
import axios from 'axios';

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: async (productId, quantity) => {
        try {
            const response = await axios.get('https://santosnr6.github.io/Data/events.json');
            const product = response.data.events.find(event => event.id === productId);
            if (product) {
                set((state) => {
                    const productIndex = state.cart.findIndex(item => item.id === productId);
                    if (productIndex !== -1) {
                        const newCart = [...state.cart];
                        newCart[productIndex].quantity += quantity;
                        return { cart: newCart };
                    } else {
                        return { cart: [...state.cart, { ...product, quantity }] };
                    }
                });
            } else {
                console.error(`Product with id ${productId} not found.`);
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    },
    removeFromCart: (productId) => {
        set((state) => {
            const productIndex = state.cart.findIndex(product => product.id === productId);
            if (state.cart[productIndex].quantity > 1) {
                const newCart = [...state.cart];
                newCart[productIndex].quantity -= 1;
                return { cart: newCart };
            } else {
                return { cart: state.cart.filter(product => product.id !== productId) };
            }
        });
    },
    clearCart: () => set({ cart: [] }),
    fetchEvents: async () => {
        try {
            const response = await axios.get('https://santosnr6.github.io/Data/events.json');
            set(() => ({ events: response.data.events }));
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    },
}));
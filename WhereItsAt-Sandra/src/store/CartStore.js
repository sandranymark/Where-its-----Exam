import { create } from 'zustand';
import axios from 'axios';

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: async (productId, events, quantity) => {
        try {
            const response = await axios.get('https://santosnr6.github.io/Data/events.json');
            const product = response.data.events.find(event => event.id === productId);
            if (product) {
                set((state) => ({ cart: [...state.cart, { ...product, quantity }] }));
            } else {
                console.error(`Product with id ${productId} not found.`);
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    },
    removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter(product => product.id !== productId) })),
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


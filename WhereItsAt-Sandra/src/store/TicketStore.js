
import { create } from 'zustand';

const useTicketStore = create((set, get) => ({
    tickets: [],
    setTickets: (newTickets) => set({ tickets: newTickets }),

    generateId: () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const idLength = 5;

        const generateRandomId = () => {
            let ticketId = '';
            for (let i = 0; i < idLength; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                ticketId += characters.charAt(randomIndex);
            }
            return ticketId;
        }

        let ticketId = generateRandomId();

        while (get().tickets.find(ticket => ticket.id === ticketId)) {
            ticketId = generateRandomId();
        }

        return ticketId;
    },
}));

export { useTicketStore };


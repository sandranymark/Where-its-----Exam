import { create } from 'zustand';

const useTicketStore = create((set, get) => ({
    tickets: [],
    setTickets: (newTickets) => set({ tickets: newTickets }),

    generateId: () => {
        const characthers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let ticketId = '';
        do {
            ticketId = '';
            for (let i = 0; i < 5; i++) {
                ticketId += characthers.charAt(Math.floor(Math.random() * characthers.length));
            }
        } while (get().tickets.find(ticket => ticket.id === ticketId));
        return ticketId;
    }
}));

export default useTicketStore;

import { create } from 'zustand';

const useTicketStore = create((set, get) => ({
    tickets: [],
    setTickets: (newTickets) => set({ tickets: newTickets }),

    generateId: () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const idLength = 5;
        let ticketId = '';

        for (let i = 0; i < idLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            ticketId += characters.charAt(randomIndex);
        }


        while (get().tickets.find(ticket => ticket.id === ticketId)) {
            ticketId = '';
            for (let i = 0; i < idLength; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                ticketId += characters.charAt(randomIndex);
            }
        }

        return ticketId;
    },

    generateSeat: (artist, quantity) => {
        const artistTickets = get().tickets.filter(ticket => ticket.artist === artist);

        if (artistTickets.length > 0) {
            const lastTicket = artistTickets[artistTickets.length - 1];
            const section = lastTicket.section;
            const lastSeat = parseInt(lastTicket.seat.split(' ')[3]);

            const consecutiveSeats = [];
            for (let i = 0; i < quantity; i++) {
                consecutiveSeats.push(`Section ${section} - seat ${lastSeat + i + 1}`);
            }

            return consecutiveSeats;
        } else {

            const sections = ['A', 'B', 'C', 'D', 'E'];
            const section = sections[Math.floor(Math.random() * sections.length)];
            const seat = Math.floor(Math.random() * 100) + 1;
            return [`Section ${section} - seat ${seat}`];
        }
    },

}));

export { useTicketStore };
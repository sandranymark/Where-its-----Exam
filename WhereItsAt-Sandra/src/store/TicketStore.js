
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

    generateSeat: (artist, quantity) => {
        const artistTickets = get().tickets.filter(ticket => ticket.artist === artist);

        const generateConsecutiveSeats = (section, lastSeat, quantity) => {
            const seats = [];
            for (let i = 0; i < quantity; i++) {
                seats.push(`Section ${section} - seat ${lastSeat + i + 1}`);
            }
            return seats;
        }

        const generateRandomSeat = () => {
            const sections = ['A', 'B', 'C', 'D', 'E'];
            const section = sections[Math.floor(Math.random() * sections.length)];
            const seat = Math.floor(Math.random() * 500) + 1;
            return [`Section ${section} - seat ${seat}`];
        }

        if (artistTickets.length > 0) {
            const lastTicket = artistTickets[artistTickets.length - 1];
            const section = lastTicket.section;
            const lastSeat = parseInt(lastTicket.seat.split(' ')[3]);
            return generateConsecutiveSeats(section, lastSeat, quantity);
        } else {
            return generateRandomSeat();
        }
    },

}));

export { useTicketStore };


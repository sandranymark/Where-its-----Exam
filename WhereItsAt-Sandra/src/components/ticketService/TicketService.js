
const TicketService = {
    generateSeats: function (orderedItems) {

        const sections = [
            { name: 'A', seats: 10 },
            { name: 'B', seats: 10 },
            { name: 'C', seats: 10 },
            { name: 'D', seats: 10 },
            { name: 'E', seats: 10 },
        ];

        const tickets = [];

        orderedItems.forEach(item => {
            console.log("huh", item);

            let selectedSection = sections[Math.floor(Math.random() * sections.length)];

            for (let i = 0; i < item.quantity; i++) {
                console.log("Creating ticket: ", item.name);
                tickets.push({
                    artist: item.name,
                    seat: `Section: ${selectedSection.name} - Seat: ${i + 1}`,
                    from: item.when.from,
                    to: item.when.to,
                    eventDate: item.when.date,
                    location: item.where,
                });
            }
        });

        return tickets;
    }
}

export { TicketService };
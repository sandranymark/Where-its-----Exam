import Ticket from '../../components/ticket/Ticket';
import { useCartStore } from '../../store/CartStore';
import './Ticketpage.css';

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

function TicketPage() {
    const { orderedItems } = useCartStore();
    console.log("Ordered Items: ", orderedItems);
    const tickets = TicketService.generateSeats(orderedItems);
    console.log("Tickets: ", tickets);

    const generateSeats = function (orderedItems) {
        console.log(orderedItems);

        return orderedItems;
    }


    return (<>
        <div className="Ticketpage">
            {orderedItems.length > 0 ? (
                <div>
                    {tickets.map((ticket, index) => (<Ticket key={index} ticket={ticket} />))}
                </div>
            ) : (
                <p>No items in the order</p>
            )}
        </div>
    </>);
}

export default TicketPage;

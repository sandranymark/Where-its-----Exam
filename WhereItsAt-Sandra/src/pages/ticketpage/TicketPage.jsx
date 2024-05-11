import Ticket from '../../components/ticket/Ticket';
import { useCartStore } from '../../store/CartStore';
import './Ticketpage.css';
import { TicketService } from '../../components/ticketService/TicketService';


function TicketPage() {
    const { orderedItems } = useCartStore();
    console.log("Ordered Items: ", orderedItems);
    const tickets = TicketService.generateSeats(orderedItems);
    console.log("Tickets: ", tickets);


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

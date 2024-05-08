import Ticket from '../../components/ticket/Ticket';
import { useCartStore } from '../../store/CartStore';

function TicketPage() {
    const { orderdItems } = useCartStore();

    return (
        <div className="Ticketpage">
            {orderdItems.length > 0 ? (
                <div>
                    {orderdItems.flatMap((ticket, index) => (
                        Array(ticket.quantity).fill().map((_, i) => (
                            <Ticket key={`${index}-${i}`} ticket={ticket} />
                        ))
                    ))}
                </div>
            ) : (
                <div>No items in the order</div>
            )}
        </div>
    );
}

export default TicketPage;
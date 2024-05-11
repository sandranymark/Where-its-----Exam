
import './Ticket.css';
import { useTicketStore } from '../../store/TicketStore';
import Barcode from 'react-barcode';

function Ticket({ ticket }) {

    const { generateId } = useTicketStore();
    const randomId = generateId();

    const formatEventDate = (dateString) => {
        const [day, month] = dateString.split(" ");
        return { day, monthAbbrev: month.substring(0, 3).toUpperCase() };
    };


    const { day, monthAbbrev } = formatEventDate(ticket.eventDate);




    return (
        <div>
            <main className='main__wrapper--ticket'>
                <section className='section__ticket--container'>
                    <article className='what__container'>
                        <p className='what__text'>WHAT</p>
                        <h1 className='ticket__artist'>{ticket.artist}</h1>
                    </article>
                    <article className='where__container'>
                        <p className='where__text'>WHERE</p>
                        <h2 className='where__place'>{ticket.location}</h2>
                        <p className='where__adress'>Göteborgs universitet. Pedagogen, hus A</p>
                    </article>
                    <section className='when__section'>
                        <article className='when__container'>
                            <p className='when__text'>WHEN</p>
                            <p className='when__date'>{day} {monthAbbrev}</p>
                        </article>
                        <article className='from__container'>
                            <p className='from__text'>FROM</p>
                            <p className='from__time'>{ticket.from}</p>
                        </article>
                        <article className='to__container'>
                            <p className='to__text'>TO</p>
                            <p className='to__time'>{ticket.to}</p>
                        </article>
                    </section>
                    <section className='info__section'>
                        <article className='info__container'>
                            <p className='info__text'>INFO</p>
                            <p className='info__seat'>{ticket.seat}</p>
                        </article>
                    </section>
                    <section className='randomId__section'>
                        <Barcode value={randomId} className="myBarcode" />
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Ticket;

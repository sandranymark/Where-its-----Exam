import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventPage.css';
import { useCartStore } from '../../store/CartStore';
import { BsDash, BsPlus } from 'react-icons/bs';

function EventPage({ events }) {
    const { id } = useParams();
    const eventData = events.find(event => event.id === id);

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(eventData.price);

    const addToCart = useCartStore(state => state.addToCart);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - eventData.price);
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + eventData.price);
    }

    const handleAddToCart = () => {
        addToCart(id, quantity);
    }


    return (
        <div className='event-wrapper'>
            <header className='header__headings'>
                <h1 className='pink__heading '>Event</h1>
                <h2 className='sub__heading'>You are about to score some tickets to</h2>
            </header>
            <main className='main__event'>
                <h1 className='pink__heading topic-title'>{eventData.name}</h1>
                <p className='green__heading'>{eventData.when.date} kl {eventData.when.from}-{eventData.when.to}</p>
                <p className='location__heding'>@ {eventData.where}</p>

                <form className='form'>
                    <h2 className='total-price'>{totalPrice} sek</h2>
                    <div className='form__div'>
                        <p className='minus' onClick={decreaseQuantity}><BsDash /></p>
                        <p className='number'>{quantity}</p>
                        <p className='plus' onClick={increaseQuantity}><BsPlus /></p>
                    </div>
                </form>
            </main>
            <button className='add__button' onClick={handleAddToCart}>Lägg i Varukorg</button>
        </div>
    )
}

export default EventPage;

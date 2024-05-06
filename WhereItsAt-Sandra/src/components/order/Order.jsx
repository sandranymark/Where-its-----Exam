import { useEffect } from 'react';
import './Order.css';
import { useCartStore } from '../../store/CartStore';


function Order() {

    const cart = useCartStore(state => state.cart);
    const fetchEvents = useCartStore(state => state.fetchEvents);

    useEffect(() => {

        fetchEvents();
    }, [fetchEvents]);

    return (
        <section className="order-form">
            {cart.length > 0 ? (
                <div className="order-items">
                    {cart.map(product => (
                        <div className="order-item" key={product.id}>


                            <form className='order__form'>
                                <section className='form__section--pink'>
                                    <h2 className='pink__heading'>{product.name}</h2>
                                    <p className='green__heading green__heading--small'>{product.when.date} kl {product.when.from}-{product.when.to}</p>
                                </section>
                                <div className='form__div'>
                                    <p className='minus'>-</p>
                                    <p className='number'>3</p>
                                    <p className='plus'>+</p>
                                </div>
                            </form>
                        </div>

                    ))}
                    <section className='order__section--total'>
                        <h2 className='sub__heading order__sub'>Totalt värde på order</h2>
                        <h2 className='order__total-price'>1000 sek</h2>
                        <button className='add__button order__button'>Skicka order</button>
                    </section>
                </div>
            ) : (
                <p>You have to place an order first, RETARD!.</p>
            )}


        </section>
    );
}

export default Order;
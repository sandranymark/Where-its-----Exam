
import { useEffect, useState } from 'react';
import './Order.css';
import { useCartStore } from '../../store/CartStore';

function Order() {
    const [cartItems, setCartItems] = useState([]);

    const cart = useCartStore(state => state.cart);
    const fetchEvents = useCartStore(state => state.fetchEvents);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    const increaseQuantity = (productId) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    }

    const decreaseQuantity = (productId) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === productId && item.quantity > 0) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);
        setCartItems(updatedCart);
    }

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <section className="order-form">
            {cartItems.length > 0 ? (
                <div className="order-items">
                    {cartItems.map((product, index) => (
                        <div className="order-item" key={product.id + index}>
                            <form className='order__form'>
                                <section className='form__section--pink'>
                                    <h2 className='pink__heading'>{product.name}</h2>
                                    <p className='green__heading green__heading--small'>{product.when.date} kl {product.when.from}-{product.when.to}</p>
                                </section>
                                <div className='form__div'>
                                    <p className='minus' onClick={() => decreaseQuantity(product.id)}>-</p>
                                    <p className='number'>{product.quantity}</p>
                                    <p className='plus' onClick={() => increaseQuantity(product.id)}>+</p>
                                </div>
                            </form>
                        </div>
                    ))}
                    <section className='order__section--total'>
                        <h2 className='sub__heading order__sub'>Totalt värde på order</h2>
                        <h2 className='order__total-price'>{totalPrice} sek</h2>
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

import { useEffect, useState } from 'react';
import './Order.css';
import { useCartStore } from '../../store/CartStore';
import NoTickets from '../../assets/images/No-tickets.jpg';
import { Link } from 'react-router-dom';
import { BsDash, BsPlus } from 'react-icons/bs';


function Order() {
    const [cartItems, setCartItems] = useState([]);
    const { cart, addToCart, removeFromCart, sendOrder } = useCartStore();

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    const increaseQuantity = (productId) => {
        addToCart(productId, 1); // Lägger till en artist i varukorgen/ordern
    };

    const decreaseQuantity = (productId) => {
        removeFromCart(productId); // Tar bort artisten/produkten från varukorgen/ordern
    };

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
                                    <p className='minus' onClick={() => decreaseQuantity(product.id)}><BsDash /></p>
                                    <p className='number'>{product.quantity}</p>
                                    <p className='plus' onClick={() => increaseQuantity(product.id)}><BsPlus /></p>
                                </div>
                            </form>
                        </div>
                    ))}
                    <section className='order__section--total'>
                        <h2 className='sub__heading order__sub'>Totalt värde på order</h2>
                        <h2 className='order__total-price'>{totalPrice} sek</h2>
                        <Link to="/ticket">
                            <button className='add__button order__button' onClick={() => sendOrder()}>Skicka order</button>
                        </Link>
                    </section>
                </div>
            ) : (
                <section className='No__order'>
                    <p>You have to place an order first, DUMBASS!</p>
                    <img className='old__lady' src={NoTickets} alt="No tickets" />
                </section>
            )}
        </section>
    );
}

export default Order;
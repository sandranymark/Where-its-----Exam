import Order from "../../components/order/Order";
import './OrderPage.css'

function OrderPage() {

    return (
        <div className="order-page">
            <h1 className="pink__heading">Order</h1>
            <Order />
        </div>
    );
}

export default OrderPage;
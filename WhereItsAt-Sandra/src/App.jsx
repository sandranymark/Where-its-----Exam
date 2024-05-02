import './App.css'

import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage"
import EventsPage from "./pages/eventsPage/EventsPage";
import OrderPage from "./pages/orderpage/OrderPage";
import AddToCartPage from './pages/AddToCartPage';
import TicketPage from './pages/ticketpage/TicketPage';
import EventPage from './pages/eventpage/EventPage';





function App() {
  return (

    <>
      <div className='app'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/addtocart" element={<AddToCartPage />} />
          <Route path="/tickets" element={<TicketPage />} />

        </Routes>


        <Footer />
      </div>
    </>
  )
}

export default App

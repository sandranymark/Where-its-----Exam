import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import EventsPage from './pages/eventsPage/EventsPage';
import EventPage from './pages/eventpage/EventPage';
import OrderPage from './pages/orderpage/OrderPage';

import TicketPage from './pages/ticketpage/TicketPage';
import Footer from './components/footer/Footer';
import './App.css'

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://santosnr6.github.io/Data/events.json')
      .then(response => {
        setEvents(response.data.events)
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage events={events} />} />
        <Route path="/event/:id" element={<EventPage events={events} />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/ticket" element={<TicketPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

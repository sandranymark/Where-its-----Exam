import './App.css'

import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import EventPage from "./pages/EventPage";
import OrderPage from "./pages/OrderPage";





function App() {
  return (

    <>
      <div className='app'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/orders" element={<OrderPage />} />
        </Routes>


        <Footer />
      </div>
    </>
  )
}

export default App

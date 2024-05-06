import { useState, useEffect } from 'react';
import axios from 'axios'
import './EventDetails.css';
import { Link } from 'react-router-dom'



function EventDetails() {
    const [events, setEvents] = useState([]);


    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/events.json')
            .then(response => {
                setEvents(response.data.events)
            })
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    const formatEventDate = (dateString) => {
        const [day, month] = dateString.split(" ");
        return { day, monthAbbrev: month.substring(0, 3).toUpperCase() };
    };


    return (
        <>

            <main className="main">
                {events.map(event => (
                    <Link className="link" to={`/event/${event.id}`} key={event.id}>
                        <div className='event__wrapper'>

                            <div className="event__date">
                                <span className="day">{formatEventDate(event.when.date).day}</span>
                                <span className="month">{formatEventDate(event.when.date).monthAbbrev}</span>
                            </div>
                            <section className="flex__column">
                                <h1 className="event__heading">{event.name}</h1>
                                <p className="event__place">{event.where}</p>
                                <p className="event__time">{event.when.from}-{event.when.to}</p>
                            </section>
                            <section className='flex__price'>
                                <p className='event__price'>{event.price} sek</p>
                            </section>
                            <div className="line"></div>
                        </div>
                    </Link>
                ))}
            </main>


        </>
    );
}

export default EventDetails;


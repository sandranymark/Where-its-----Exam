import Header from "../../components/header/Header"
import EventDetails from "../../components/eventDetails/EventDetails"

function EventsPage() {
    return (
        <div className="EventsWrapper">
            <Header />
            <section className="main__section">
                <EventDetails />

            </section>
        </div>
    )
}

export default EventsPage

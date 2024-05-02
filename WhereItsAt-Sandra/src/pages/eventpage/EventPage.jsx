import './EventPage.css'

function EventPage() {
    return (
        <>
            <div className='event-wrapper'>
                <header className='header__headings'>
                    <h1 className='pink__heading'>Event</h1>
                    <h2 className='sub__heading'>You are about to score some tickets to</h2>
                </header>

                <main className='main__event'>
                    <h1 className='pink__heading'>Lasse Stefanz</h1>
                    <p className='green__heading'>21 mars kl 19.00-21.00</p>
                    <p className='location__heding'>@ Kjell Härnqvistsalen</p>

                    <form className='form'>
                        <h2 className='total-price'>1050 sek</h2>
                        <div className='form__div'>
                            <p className='minus'>-</p>
                            <p className='number'>3</p>
                            <p className='plus'>+</p>
                        </div>
                    </form>
                </main>
                <button className='add__button'>Lägg i Varukorg</button>
            </div>
        </>
    )
}

export default EventPage

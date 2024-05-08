import './Ticket.css'

function Ticket() {
    return (
        <main className='main__wrapper--ticket'>
            <section className='section__ticket--container'>
                <article className='what__container'>
                    <p className='what__text'>WHAT</p>
                    <h1 className='ticket__artist'>Lasse-Stefanz</h1>
                </article>
                <article className='where__container'>
                    <p className='where__text'>WHERE</p>
                    <h2 className='where__place'>Kjell Härnqvistsalen</h2>
                    <p className='where__adress'>Göteborgs universitet. Pedagogen, hus A</p>
                </article>
                <section className='when__section'>
                    <article className='when__container'>
                        <p className='when__text'>WHEN</p>
                        <p className='when__date'>21 Mar</p>
                    </article>
                    <article className='from__container'>
                        <p className='from__text'>FROM</p>
                        <p className='from__time'>19.00</p>
                    </article>
                    <article className='to__container'>
                        <p className='to__text'>TO</p>
                        <p className='to__time'>21.00</p>
                    </article>
                </section>

            </section>
        </main>
    )
}

export default Ticket

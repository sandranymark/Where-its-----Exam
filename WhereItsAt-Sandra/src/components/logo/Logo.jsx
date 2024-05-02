import Logotype from '../../assets/logo/logo.svg'
import '../logo/Logo.css'


function Logo() {

    return (
        <section className='Logotype'>
            <img className='Logo' src={Logotype} alt="Logotype" />
            <h1 className='heading'>Where It’s @</h1>
            <h2 className='sub-heading'>Ticketing made easy</h2>
        </section>
    )
}

export default Logo

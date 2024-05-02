import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav className='nav'>
            <ul className='nav__links'>
                <li className='nav__list'>
                    <Link to="/" className="nav__link">Home</Link>
                </li>
                <li className='nav__list'>
                    <Link to="/events" className="nav__link">Events</Link>
                </li>
                <li className='nav__list'>
                    <Link to="/orders" className="nav__link">Orders</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav

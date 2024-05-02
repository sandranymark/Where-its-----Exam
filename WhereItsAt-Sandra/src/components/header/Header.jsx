import Searchbar from "../searchbar/Searchbar"
import './Header.css'


export default function Header() {
    return (
        <header>
            <h1 className="header__pink">Events</h1>
            <Searchbar />
        </header>
    )
}
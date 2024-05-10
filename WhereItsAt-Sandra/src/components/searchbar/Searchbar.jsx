
import './Searchbar.css'
import { FaSearch } from 'react-icons/fa';

function Searchbar() {
    return (
        <div className='search__container'>
            <input type="search" className='search__input' aria-label="Searchbar" />
            <div className='search__icon'>
                <FaSearch />
            </div>
        </div>
    );
}

export default Searchbar;
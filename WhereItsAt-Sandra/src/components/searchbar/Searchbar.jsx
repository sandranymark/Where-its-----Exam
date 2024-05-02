import SearchIcon from '../../assets/icons/search-icon.svg'
import './Searchbar.css'


function Searchbar() {
    return (
        <>
            <div className='search__container'>
                <input type="search" className='search__input'
                    aria-label="Serchbar" />
                <img
                    className='search__icon'
                    src={SearchIcon}
                    alt='search icon' />

            </div>
        </>
    )
}

export default Searchbar

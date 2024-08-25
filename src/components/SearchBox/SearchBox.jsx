import { useId } from 'react';
import css from '../SearchBox/SearchBox.module.css';

function SearchBox ( {searchValue, setSearchValue })  {
    const SearchBoxId = useId ();
    return (
    <div className={css.searchForm}>
        <label className={css.searchLabel} htmlFor={SearchBoxId}
        >Find contacts by name</label>
    <input 
    className={css.searchInput}
    type="text" 
    name="seach"
    id="SearchBoxId"
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    />
    </div>
);
}

export default SearchBox;
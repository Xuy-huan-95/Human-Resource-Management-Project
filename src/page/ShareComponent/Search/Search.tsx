import SearchIcon from '@mui/icons-material/Search';
import "./Search.scss"

interface ISearchShare {
    search: string
    setSearch: any
}

const SearchShare = (props: ISearchShare) => {
    const { search, setSearch } = props
    return (
        <div className="search">
            <div className="search-icon">
                <SearchIcon />
            </div>
            <input
                type="text"
                placeholder="Tìm kiếm"
                value={search}
                onChange={(event) => setSearch(event.target.value)}

            />
        </div>
    )
}

export default SearchShare
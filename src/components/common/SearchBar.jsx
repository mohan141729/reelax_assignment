import { Search } from 'lucide-react'

export default function SearchBar({ placeholder }) {
  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} />
      <Search className="search-icon" />
    </div>
  )
}

import { Menu, Plus, Sparkles, UserCircle } from 'lucide-react'
import Button from '../common/Button'
import SearchBar from '../common/SearchBar'

export default function Header() {
  return (
    <header className="topbar">
      <SearchBar placeholder="Find influencers to collaborate with" />

      <div className="top-actions">
        <Button variant="secondary">
          <Sparkles className="button-icon-left" />
          Upgrade
        </Button>
        <Button variant="primary">
          <Plus className="button-icon-left" />
          Create Campaign
        </Button>
        <button className="icon-button profile" aria-label="Profile">
          <UserCircle />
        </button>
        <button className="icon-button menu" aria-label="Menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}

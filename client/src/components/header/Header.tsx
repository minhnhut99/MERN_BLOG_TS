import { MOON_ICON, SEARCH_ICON, SUN_ICON } from '@/assets/icons/Icons'
import Search from "@/components/search/Search"
import { useState } from "react"
import "./Header.scss"

const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const handleSearchEngine = () => {
    setIsOpenSearch(true)
  }
  return (
    <>
      <header className='header'>
        <div className='header-logo'>
          <img src="https://images.unsplash.com/photo-1635320154903-fd41ef72fec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZGNhcGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="logo image address" />
        </div>
        <ul className='header-menu'>
          <li>Home</li>
          <li>Blog</li>
          <li>Gallery</li>
          <li>Videos</li>
          <li>Pages</li>
        </ul>
        <div className="header-right">
          <div dangerouslySetInnerHTML={{ __html: MOON_ICON }}></div>
          <div dangerouslySetInnerHTML={{ __html: SUN_ICON }}></div>
          <div onClick={handleSearchEngine} dangerouslySetInnerHTML={{ __html: SEARCH_ICON }}></div>
        </div>
      </header>
      <Search visible={isOpenSearch} setVisible={setIsOpenSearch} />
    </>
  )
}

export default Header
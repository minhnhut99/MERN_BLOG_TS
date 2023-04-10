import { MENU_ICON, MOON_ICON, SEARCH_ICON, SUN_ICON } from '@/assets/icons/Icons'
import Search from "@/components/search/Search"
import { useState } from "react"
import "./Header.scss"
import { useRecoilState } from "recoil"
import { toggleThemeValue } from '@/recoil/atoms'
import Icon from '../icon/Icon'

const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const [darkTheme, setDarkTheme] = useRecoilState(toggleThemeValue)
  const handleClickIconLightTheme = () => {
    setDarkTheme(false)
  }
  const handleClickIconDarkTheme = () => {
    setDarkTheme(true)
  }
  const handleClickIconSearchEngine = () => {
    setIsOpenSearch(true)
  }
  const handleClickIconMenu = () => {
  }
  return (
    <>
      <header className='header'>
        <div className='header-logo'>
          <img src="https://images.unsplash.com/photo-1635320154903-fd41ef72fec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZGNhcGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="logo image address" />
        </div>
        <ul className='header-menu'>
          <li className='text'>Home</li>
          <li className='text'>Blog</li>
          <li className='text'>Gallery</li>
          <li className='text'>Videos</li>
          <li className='text'>Pages</li>
        </ul>
        <div className="header-right">
          {darkTheme ?
            <Icon classNameAdditional='icon-svg-light' onClick={handleClickIconLightTheme} icon={SUN_ICON} />
            :
            <Icon classNameAdditional='icon-svg-dark' onClick={handleClickIconDarkTheme} icon={MOON_ICON} />
          }
          <Icon classNameAdditional={!darkTheme ? "icon-svg-dark" : "icon-svg-light"} onClick={handleClickIconSearchEngine} icon={SEARCH_ICON} />
          <Icon onClick={handleClickIconMenu} classNameAdditional='icon-menu' icon={MENU_ICON} />
        </div>
      </header>
      <Search visible={isOpenSearch} setVisible={setIsOpenSearch} />
    </>
  )
}

export default Header
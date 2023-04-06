import { CLOSE_ICON } from '@/assets/icons/Icons'
import "./Search.scss"
import { useRef, RefObject, useEffect } from 'react'
interface ISearchProps {
  visible: boolean
  setVisible: (value: boolean) => void
}
const Search = ({ visible, setVisible }: ISearchProps) => {
  const searchRef = useRef(null)
  const handleClickIconClose = () => {
    setVisible(false)
  }
  const useOutSideSearchComponent = (ref: RefObject<HTMLElement>): void => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent): void => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setVisible(false)
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutSideSearchComponent(searchRef)
  return (
    <div className={visible ? "search search-active" : "search"}>
      <div className="search-container">
        <div className='search-inner' ref={searchRef}>
          <input type="text" placeholder='Type to search...' />
          <div className='close-icon' onClick={handleClickIconClose} dangerouslySetInnerHTML={{ __html: CLOSE_ICON }}></div>
        </div>
      </div>
    </div>
  )
}

export default Search
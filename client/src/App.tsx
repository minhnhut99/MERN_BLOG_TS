import './App.css'
import Global from '@/pages/global/Global'
import { toggleThemeValue } from './recoil/atoms'
import { useRecoilValue } from "recoil"
function App() {
  const theme = useRecoilValue(toggleThemeValue)
  return (
    <div className={theme ? "dark" : "light"}>
      <Global />
    </div>
  )
}

export default App

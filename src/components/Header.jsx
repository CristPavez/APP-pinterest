import {Link} from 'react-router-dom'
import '../styles/Header.scss'
const Header = () => {
  return (
    <header className='header-container'>
      <nav className='header-container__nav'>
        <Link className='header-container__link' to="/">Home</Link>
        <Link  className='header-container__link'  to="/explorer">Explorer</Link>
      </nav>
      <input type='search'/>
    </header>
  )
}

export default Header
// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <Link to="/">
      <li className="home">Home</li>
    </Link>
    <Link to="/about">
      <li className="home">About</li>
    </Link>
  </ul>
)

export default Header

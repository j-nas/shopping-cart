import React from "react"
import { Link } from "react-router-dom"

import "./Navbar.css"
function Navbar(props) {
  // const location = useLocation()
  return (
    <div>
      <nav>
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar
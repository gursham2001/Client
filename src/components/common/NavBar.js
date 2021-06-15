import React from 'react'
import SearchBar from './SearchBar.js'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {

  

  return (
    <>
      <nav>
        <ul className="menu">
          <li className="home"><a href="#"><FontAwesomeIcon icon={faHome}/> Home</a></li>
          <li className="item button"><a href="#">Login</a></li>
          <li className="item button secondary"><a href="#">SignUp</a></li>
          <li className="toggle"><span className="bars"></span></li>
        </ul>
        <SearchBar/>
      </nav>
    </>
  )
}

export default NavBar
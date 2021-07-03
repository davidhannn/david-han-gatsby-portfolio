import React, { Fragment, useState, useLayoutEffect } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

import { MenuItems } from "./menu-items"

import "./navbar.styles.scss"

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav className="navbar-items">
      {/* <h1 className="navbar-logo">React</h1> */}

      <div className="menu-icon" onClick={handleClick}>
        {clicked === false ? (
          <FaIcons.FaBars style={{ color: "#f44336" }} />
        ) : (
          <AiIcons.AiOutlineClose style={{ color: "#f44336" }} />
        )}
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar

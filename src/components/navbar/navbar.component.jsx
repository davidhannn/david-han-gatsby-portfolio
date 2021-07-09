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
      <div className="navbar-logo">
        <a
          href="#hero"
          style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
        >
          <span>
            <span style={{ color: "#f44336" }}>&lt;/&gt;</span>DH
          </span>
        </a>
      </div>

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
            <div key={index}>
              <li onClick={handleClick}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            </div>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar

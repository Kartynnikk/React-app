import React from 'react'
import logoImage from "../../assets/image/movieLogo.png"
import "./header.css"

const Header = () => {
  return (
    <div className="header-container">

        <img src={logoImage} alt="logo" height="70" />

        <button>Sign up</button>
    </div>
  )
}

export default Header

import React from 'react'
import logoImage from "../../assets/image/movieLogo.png"
import style from "../Header/Header.module.css"

const Header = () => {
  return (
    <div className={style.headerContainer}>

        <img src={logoImage} alt="logo" height="70" />

        <button>Sign up</button>
    </div>
  )
}

export default Header

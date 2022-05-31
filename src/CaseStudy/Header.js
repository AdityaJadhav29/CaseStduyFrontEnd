import React from "react"
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./HeaderElement"



const Header = (isLogin) => {
  return (
    <Nav>
      <NavLink to='/'>
        <img src={'/Capgemini-Emblem.png'} alt='logo' id='logo' />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='/profile'>
          Profile
        </NavLink>
        <NavLink to='/assessment'>
          Assessment
        </NavLink>
        <NavLink to='/training'>
          Training
        </NavLink>
        <NavLink to='/project'>
          Project Mapping
        </NavLink>
        <NavLink to='/trainingreport'>
          Training Report
        </NavLink>
        <NavLink to='/contact'>
          Contact Us
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
      </NavBtn>
    </Nav>
  )
}

export default Header; 
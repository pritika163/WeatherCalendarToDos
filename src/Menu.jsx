import React from 'react'
import {NavLink} from "react-router-dom";
const Menu = () => {
  return (
    <>
    <div className="menu_style"> 
    <NavLink to="/Calendar" style={({isActive}) => ({color: isActive ? '#fff': 'yellow'})}> Calendar</NavLink>
    <NavLink to="/ToDos" style={({isActive}) => ({color: isActive ? '#fff': 'yellow'})}> ToDos</NavLink>
    <NavLink to="/" style= {({isActive}) => ({color: isActive ? '#fff': 'yellow'})}> Home</NavLink>
    </div>
    </>
  )
};

export default Menu
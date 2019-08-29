
import React,{Component} from 'react';
import "./Navigation.scss"
import {NavLink} from "react-router-dom"

const styleActive={
color:"ghostwhite",
    textDecoration:"none",
    fontSize:"1.5rem"
}
const styleNo={
    textDecoration: "none",
color: "#3498db",
    fontSize: "1.5rem"

}

function Navigation() {

    return(
        <div className={"navigation"}>
        <nav className={"center container"}>
            <div className={"logo rotate-center"}></div>

    <ul className={"nav_list"}>
        <li><NavLink style={styleNo} activeStyle={styleActive} exact to={"/"}>Main</NavLink></li>
        <li><NavLink style={styleNo} activeStyle={styleActive} to={"/about"}>About me</NavLink></li>
        <li><NavLink style={styleNo}  activeStyle={styleActive} to={"/fridge"}>Go to fridge</NavLink></li>
    </ul>

    </nav>
    </div>
    )
}


export default Navigation;
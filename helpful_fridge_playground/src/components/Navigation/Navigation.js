
import React,{Component} from 'react';
import "./Navigation.scss"
import {NavLink} from "react-router-dom"


function Navigation() {

    return(
        <div>
        <nav className={"center"}>
            <div className={"logo"}>helpful fridge</div>

    <ul className={"nav_list"}>
        <li><NavLink exact to={"/"}>Main</NavLink></li>
        <li><NavLink to={"/about"}>About me</NavLink></li>
        <li><NavLink to={"/fridge"}>Go to fridge</NavLink></li>
    </ul>

    </nav>
    </div>
    )
}


export default Navigation;
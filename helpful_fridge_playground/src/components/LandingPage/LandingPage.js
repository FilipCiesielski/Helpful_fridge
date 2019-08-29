import React, {Component} from "react";
import "./LandingPage.scss"
import {NavLink} from "react-router-dom";

const styleActive={
    color:"ghostwhite",
    textDecoration:"none",
    fontSize:"1.5rem"
}
const styleNo={
    textDecoration: "none",
    color: "ghostwhite",
    fontSize: "1.5rem"

}
class LandingPage extends Component{
    render() {
        return (
            <>
                               <header>
                <h1 className={"focus-in-expand"}>Helpful Fridge</h1>
            </header>
            <section className={"main"}>
            <div className={"go_to_fridge"}><NavLink style={styleNo}  activeStyle={styleActive} to={"/fridge"}>Let's try!</NavLink></div>
        </section>
 </>
        )

    }

}

export default LandingPage;
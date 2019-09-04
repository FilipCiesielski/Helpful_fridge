import React, {Component} from "react";
import "./AboutMe.scss"


class AboutMe extends Component{
    render() {
        return(
            <section className={"about_me"}>

                <div className={"photo"}>photo</div>

                <div className= {"describe"}>Tu będzie o mnie</div>
            </section>
        )
    }

}



export default AboutMe;

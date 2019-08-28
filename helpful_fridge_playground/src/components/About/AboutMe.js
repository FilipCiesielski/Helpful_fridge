import React, {Component} from "react";
import "./AboutMe.scss"


class AboutMe extends Component{
    render() {
        return(
            <section className={"about_me"}>
                <div>Tu będzie o mnie</div>
                <div className={"photo"}>photo</div>
            </section>
        )
    }

}

export default AboutMe;

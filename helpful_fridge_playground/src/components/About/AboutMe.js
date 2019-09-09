import React, {Component} from "react";
import "./AboutMe.scss"


class AboutMe extends Component{
    state={
        cvSize:"cv",
        invisibleCv:"hidden",
        certificateSize:"describe",
        myPerson:"my_person"

      }
    handleOnEnter=()=>{
        this.setState({certificateSize:"big",cvSize:"hidden",myPerson:"hidden",})
        console.log("hello")
    }
    handleOnLeave=()=>{
        this.setState({certificateSize:"describe",cvSize:"describe",myPerson:"my_person",})

    }
    handleOnEnterCv=()=>{
        this.setState({cvSize:"bigCV",certificateSize:"hidden",myPerson:"hidden",invisibleCv:"invisible"})

    }
    handleOnLeaveCv=()=>{
        this.setState({cvSize:"cv",certificateSize:"describe",myPerson:"my_person",invisibleCv:"hidden"})

    }


    render() {
        return(
            <>
            <section className={"about_me"}>


                <div className= {this.state.cvSize}  onMouseLeave={this.handleOnLeaveCv} onMouseEnter={this.handleOnEnterCv}></div>
                <div className={this.state.invisibleCv} onMouseLeave={this.handleOnLeaveCv} onMouseEnter={this.handleOnEnterCv}></div>

                <div className= {this.state.certificateSize} onMouseLeave={this.handleOnLeave} onMouseEnter={this.handleOnEnter}></div>
               </section>
                <section className={this.state.myPerson}>
                    <h3>Hello!
                        My name is Filip.
                        I am a chef who decided to change his profession. These are my first steps in programming, I have a lot of energy and willingness to keep learning and improving my skills.
                        This is my first project that I created at the end of the JavaScript bootcamp, using all the knowledge I gained during the course.</h3>
                </section>
</>
                 )
    }

}



export default AboutMe;

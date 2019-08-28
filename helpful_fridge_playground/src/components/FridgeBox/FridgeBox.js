import React, {Component} from "react";
import "./FridgeBox.scss"
import Slider from "../Slider/Slider";
import Form from "../Form/Form";


class FridgeBox extends Component{
    render() {
        return (
            <section className={"box"}>
            <Title/>
            <Fridge/>
            <Form/>
            </section>

        )
    }
}



class Fridge extends Component {
    state = {
        className: "door"
    }
doorOnClick=()=>{
        this.setState({className:"doorOpen"})
}

    render() {
        return (
            <div className="backDoor">
                <div className="handler"></div>
                <div className={this.state.className} onClick={this.doorOnClick}></div>
            </div>
        )
    }
}




class Title extends Component{
    render() {
        return(
            <h1 className={"title"} >Let's try a helpful fridge ! </h1>
        )
    }
}




export default FridgeBox;

import React, {Component} from "react";
import "./FridgeBox.scss"
import Slider from "../Slider/Slider";
import Form from "../Form/Form";


class FridgeBox extends Component{
    render() {
        return (
       <>
            <Title/>
            <Fridge/>
            <Form/>
    </>
        )
    }
}




class Fridge extends Component {
    state={
        class1:"door",
        class2:"",
        class3:"backDoor"
    }

    handleOpenDoor=()=>{
        console.log("elo")
this.setState({class1:"doorOpen ",class2:"hidden"});
    }
       render() {
        return (
            <div className={"fridge"}>
                <div className={"backDoor"} onClick={this.handleCloseDoor}>
                    <span className={this.state.class2} >SWEG</span>
                    <div className={this.state.class1} onClick={this.handleOpenDoor}></div>
            </div>
                <div className={"form_search"}>
                    tu przsssssssekarzsssssssssse propsy z ssssssssssssformassssssssssssssssssssssssss
                </div>
            </div>
        )
    }
}




class Title extends Component{
    render() {
        return(
            <h1 className={"title focus-in-expand"} >Let's try a helpful fridge ! </h1>
        )
    }
}





export default FridgeBox;

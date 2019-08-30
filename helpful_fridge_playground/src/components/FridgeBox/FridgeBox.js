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
    constructor(props){
        super(props);
        this.state={
            class1:"door",
            class2:"",
            class3:"hidden"
        }
        this.myRef = React.createRef();

    }

    handleOpenDoor=()=>{
        console.log("elo")
// this.setState({class1:"doorOpen ",class2:"hidden"});
        this.myRef.current.classList.toggle("doorOpen");
        console.log(this.myRef.current)
    }
         render() {
        return (
            <div className={"fridge"}>
                <div className={"backDoor"} >
                    <span className={this.state.class2} >SWEG</span>
                    <div className="door" ref={this.myRef}  onClick={this.handleOpenDoor}></div>
            </div>
                <div className={"form_search"}>
                    tu przsssssssekarzsssssssssse propsy z sssssssssfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsssformassssssssssssssssssssssssss
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

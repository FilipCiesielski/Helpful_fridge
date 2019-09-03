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
            </>
        )
    }
}




class Fridge extends Component {
    constructor(props){
        super(props);
        this.state={
            class1:"door",
            class2:"span",
            class3:"handler",
            showForm:false
        }
        this.myRef = React.createRef();

    }

    handleOpenDoor=()=>{
        this.myRef.current.classList.toggle("doorOpen");
        if (this.state.showForm){
            this.setState({showForm:false, class2:"span",class3:"handler"})
        }else{

            this.setState({showForm:true,class2:"hidden",class3:"hidden"})

        }
        console.log("elo")
// this.setState({class1:"doorOpen ",class2:"hidden"});

        // this.setState({class2:"hidden",showForm:true});

        console.log(this.myRef.current)
    }
    render() {
        return (
            <div className={"fridge"}>

                <div className={"backDoor"} >
                    <span className={this.state.class2}>SWEG</span>
                    <div className={this.state.class3}></div>
                    <div className="door" ref={this.myRef}  onClick={this.handleOpenDoor}></div>
                    {this.state.showForm && <Form/>}
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

import React, {Component} from "react";
import "./Form.scss"



class Form extends Component{
    state={
        response:null,
        recipe:"",
        name:"",
        ingredient1:"",
        ingredient2:"",
        ingredient3:"",
        ingredients:null,
        measure:null,
        method:null
    };


    fetchData = () => {
        fetch(`https://www.themealdb.com/api/json/v2/8673533/filter.php?i=${this.state.ingredient1},${this.state.ingredient2},${this.state.ingredient3}`)
            .then(resp => resp.json())
            .then(resp => {
                console.log(this.props)
                this.setState({response: resp})
                this.props.onFormSubmit(resp); // to jest funkcja z FridgeBox
            })
    }


    handleOnChange1=e=>{
        this.setState({ ingredient1:e.target.value})
    }
    handleOnChange2=e=>{
        this.setState({ ingredient2:e.target.value})
    }
    handleOnChange3=e=>{
        this.setState({ ingredient3:e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.fetchData()
        console.log('Your ingredients ' + this.state.ingredient1,this.state.ingredient2,this.state.ingredient3);
    };

    render(){
              return (
            <>
                <section className={"search_form"}>
                    <form onSubmit={this.handleSubmit}>
                        <label>ingredient
                            <input className={"input_style"} type="text" name="name" value={this.state.ingredient1} onChange={this.handleOnChange1}/>
                        </label>
                        <label>ingredient
                            <input  className={"input_style"}type="text" name="name" value={this.state.ingredient2} onChange={this.handleOnChange2}/>
                        </label>
                        <label>ingredient
                            <input  className={"input_style"} type="text" name="name" value={this.state.ingredient3} onChange={this.handleOnChange3}/>
                        </label>
                        <input className={"submit"} type="submit" value="search" />
                    </form >
                </section>

            </>
        )
    }
}



export default Form;
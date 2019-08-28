import React, {Component} from "react";
import "./Form.scss"



class Form extends Component{
    state={
    response:""
    };

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v2/8673533/filter.php?i=avocado')
            .then(resp => resp.json())
            .then(resp => {this.setState({response: resp})    })
    }

handleOnClick=()=>(  fetch('https://www.themealdb.com/api/json/v2/8673533/filter.php?i={meal.strMeal}')
    .then(resp => resp.json())
    .then(resp => {this.setState({response: resp})    }))


    render() {
        return (
            <>
                <ul>
                    {(this.state.response==="")?null:this.state.response.meals.map((meal)=><li onClick={this.handleOnClick}>{meal.strMeal}</li>)}
                </ul>
                </>
        )
    }
}



export default Form;
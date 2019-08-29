import React, {Component} from "react";
import "./Form.scss"



class Form extends Component{
    state={
    response:"",
        recipe:""
    };

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v2/8673533/filter.php?i=avocado')
            .then(resp => resp.json())
            .then(resp => {this.setState({response: resp})    })
    }

handleOnClick=(strMeal)=>(
    fetch(`https://www.themealdb.com/api/json/v2/8673533/search.php?s=${strMeal}`)
    .then(resp => resp.json())
    .then(resp => {this.setState({recipe: resp})    }))


    render() {
        console.log(this.state.recipe )
        return (
            <>
                <div className={"search_result"}>
                <ul>
                    {(this.state.response==="")?null:this.state.response.meals.map((meal)=><li onClick={()=>this.handleOnClick(meal.strMeal)}>{meal.strMeal}</li>)}
                </ul>
                <div>
                    {(this.state.recipe==="")?null:this.state.recipe.meals[0]["strIngredient1"]}
                </div>
                    </div>
                </>
        )
    }
}



export default Form;
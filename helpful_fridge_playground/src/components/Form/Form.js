import React, {Component} from "react";
import "./Form.scss"



class Form extends Component{
    state={
    response:"",
        recipe:"",
        name:"",
        ingredient1:"",
        ingredient2:"",
        ingredient3:"",
        ingredients:null,
        measure:null,
        method:null

    };
fetchData=()=>{
    fetch(`https://www.themealdb.com/api/json/v2/8673533/filter.php?i=${this.state.ingredient1},${this.state.ingredient2},${this.state.ingredient3}`)
.then(resp => resp.json())
.then(resp => {this.setState({response: resp})    })
}

handleOnClick=(strMeal)=>{
        fetch(`https://www.themealdb.com/api/json/v2/8673533/search.php?s=${strMeal}`)
            .then(resp => resp.json())
            .then(resp => {this.setState({recipe: resp},()=>{
                console.log(this.state.recipe.meals[0] )
                const meal = this.state.recipe.meals[0]
                let newIngerdiens=[];
                for (let item in meal){
                    if((item.toString().indexOf("strIngredient")!==-1 )&&(meal[item]!==null)&&(meal[item]!=="")){
                        console.log(item,meal[item])
                        newIngerdiens.push(meal[item])
                    }
                    this.setState({method:newIngerdiens})
                }
                let newMeasure=[];
                for (let item in meal){
                    if((item.toString().indexOf("strMeasure")!==-1)&&(meal[item]!==null)&&(meal[item]!=="")){
                        console.log(item,meal[item])
                        newMeasure.push(meal[item])
                    }
                    this.setState({measure:newMeasure})
                }
                let newMethod=[];
                for (let item in meal){
                    if((item.toString().indexOf("strInstructions")!==-1)&&(meal[item]!==null)&&(meal[item]!=="")){
                        console.log(item,meal[item])
                        newMethod.push(meal[item])
                    }
                    this.setState({ingredients:newMethod})
                }


                    })    })


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
    // {
    //     console.log(this.state.recipe );
    //
    //     let items = meal
    //
    //
    //     for (let item in this.state.recipe.meals[0]){
    //         return <li>meal[item])</li>
    //     }


        return (
            <>
                <div className={"search_result"}>
                <ul>
                    {(this.state.response==="")?null:this.state.response.meals.map((meal)=><li onClick={()=>this.handleOnClick(meal.strMeal)}>{meal.strMeal}</li>)}
                </ul>
                <div>
                    {(this.state.recipe==="")?null:this.state.recipe.meals[0]["strIngredient1"]}
                </div>
                    <div>{
                        // items
                    }</div>
                    </div>
                <section className={"search_form"}>
                    <form onSubmit={this.handleSubmit}>
                        <label>ingredient
                            <input type="text" name="name" value={this.state.ingredient1} onChange={this.handleOnChange1}/>
                        </label>
                        <label>ingredient
                            <input type="text" name="name" value={this.state.ingredient2} onChange={this.handleOnChange2}/>
                        </label>
                        <label>ingredient
                            <input type="text" name="name" value={this.state.ingredient3} onChange={this.handleOnChange3}/>
                        </label>
                        <input type="submit" value="search" />
                    </form >
                </section>
                </>
        )
    }
}



export default Form;
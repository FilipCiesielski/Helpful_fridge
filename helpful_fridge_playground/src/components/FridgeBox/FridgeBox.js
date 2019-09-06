import React, {Component} from "react";
import "./FridgeBox.scss"
import Form from "../Form/Form";

class FridgeBox extends Component{
    state={
        response:null,
        ingredients:null,
        measure:null,
        method:null,
        recipe:"",

    }

    updateState = (data) =>{
        this.setState({
            response: data
        })
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
                    this.setState({ingredients:newIngerdiens})
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
                    this.setState({method:newMethod})
                }
            })
            })}

            render() {
        let responseResult;
        let recipeResult;
        if (this.state.response===null){
            responseResult=null
        }else if (this.state.response.meals===null){
            responseResult= <h1>Nothing found, please try again.</h1>
        }else{
            responseResult= this.state.response.meals.map((meal)=> <li key={meal.idMeal} onClick={() => this.handleOnClick(meal.strMeal)}>{meal.strMeal}</li>)
             recipeResult=<>
                <div className={"recipe_box"}>
                    <div className={"ingredient_list"}>
                        <ul className={"list"}>
                            {(this.state.ingredients===null)? null:this.state.ingredients.map((ingr,index)=><li key={index}>{ingr}</li>)}
                        </ul>
                    </div>
                    <div className={"measure_list"}>
                        <ul className={"list"}>
                            {(this.state.measure===null)? null:this.state.measure.map((mea,index)=><li key={index}>{mea}</li>)}
                        </ul>
                    </div>
                </div>
                <div className={"method"}>
            {(this.state.method===null)? null:this.state.method.map((met,index)=><p key={index}>{met}</p>)}</div>



            </>
        };
        return (
            <>
                <Title/>
                <div className={"cold"}>
                <Fridge onFormSubmit={this.updateState}/>
                <div className={"search_result"}>
                <ul className={"name_list"}>
                   {responseResult}


                </ul>
                    {recipeResult}
                 </div>

                </div>

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

        console.log(this.myRef.current)
    }
    render() {
        return (
            <div className={"fridge"}>

                <div className={"backDoor"} >
                    <span className={this.state.class2}>SWEG</span>
                    <div className={this.state.class3}></div>
                    <div className="door" ref={this.myRef}  onClick={this.handleOpenDoor}></div>
                    {this.state.showForm && <Form onFormSubmit={this.props.onFormSubmit}/>}
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

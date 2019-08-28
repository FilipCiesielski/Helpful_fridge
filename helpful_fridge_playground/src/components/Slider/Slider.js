import React, { Component } from 'react';

class Slider extends Component {
    state = {
            recipes:["fjfjfjfjjfjfj","fnjnfjenfjnrjnf","rffnrnjfnrjnfnrjf","frfjrbjfrjfvvvv"],
        currentIndex:0
        };

    goToPrevSlide = () => {
        this.setState(nextState => ({
            currentIndex: nextState.currentIndex - 1
        }));
    }

    goToNextSlide = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    render() {
        return (
            <div className="slider">

                {
                    <ul>
                        {this.state.recipes.map((element, index) => (<li>{element} {index}</li>))}
                    </ul>


                }

                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />

                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
        );
    }
}


const RightArrow = (props) => {
    return (
        <div className="rightArrow" onClick={props.goToNextSlide}>
            &gt;
        </div>
    );
}

const LeftArrow = (props) => {
    return (
        <div className="leftArrow" onClick={props.goToPrevSlide}> &lt;
        </div>
    );
}






export default Slider
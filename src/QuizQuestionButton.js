import React, {Component} from 'react';
//4th step
class QuizQuestionButton extends React.Component{

    handleClick(){
        this.props.clickHandler(this.props.button_text);
    }
    render(){

       return ( <li><button onClick ={this.handleClick.bind(this)}>{this.props.button_text}</button> </li> );
    }



}
export default QuizQuestionButton
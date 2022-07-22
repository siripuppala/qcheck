import React, {Component} from 'react';
//3rdstep
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';
let quizData = require('./quiz_data.json');

class Quiz extends React.Component{

    constructor(props){
        super(props);
        this.state = {quiz_position:1};

    }
    
    showNextQuestion(){
        this.setState( (state) => { 
        return {quiz_position:state.quiz_position+1}
        })
    }

    handleResetClick(){
        this.setState({quiz_position:1});
    }

    render() {
        //checking if we reached the end of the quiz

       const isQuizEnd =  ( (this.state.quiz_position-1) === quizData.quiz_questions.length);
       // const isQuizEnd = true;
      return ( 
         <div> 
            { isQuizEnd ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/> :
             <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}  
             showNextQuestionHandler ={this.showNextQuestion.bind(this)}
             /> }
          </div>
          );
      /*  return (
             <div> 
                <div className='QuizQuestion'> 
                {console.log(quizdata)}
                {quizdata.quiz_questions[0].instruction_text}
                </div>
            
            </div>);
            */
    }

   
    
}

export default Quiz;
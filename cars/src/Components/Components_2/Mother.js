import React, { Component } from 'react';
import Child from './child';

export default class Mother extends Component {
    
    state={
        motherMessage:null,
        childMessage:null
    };

    /*create function when user press a button this function
      call the setState which going to change the motherMessage
    */
     tidyRoom=()=>{
         
        this.setState({motherMessage:'go tidy your room'})
    };

    /*create function when user press a button this function
      call the setState which going to change the ChildMessage
    */
    AnswerChild=()=>{
        this.setState({childMessage:'Ok Mom I\'am going to tidy my bedroom'})
    }
    render() {
        return (
            <div className="border py-2">
                <h1>Mother</h1>
                <button onClick={this.tidyRoom} className='btn btn-primary my-4'>mom order</button>
                <p>{this.state.motherMessage}</p>
                <hr />
                <div className="mycars-mother-child">
                    <Child child='Child' orderMom={this.state} Answer={this.AnswerChild} />
                </div>
            </div>
        )
    }
}

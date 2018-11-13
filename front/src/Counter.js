import React, { Component } from 'react';


class Counter extends React.Component {

    state={
        num: 0,
        INC: 0,
        DEC: 0
    }
    INC= ()  => {
    let num= this.state.num
        num++
        this.setState({num})
    }
    DEC= ()  => {
        let num= this.state.num
        num--
        this.setState({num})

    }
    
    



    render(){
        return(
            
            <div style={{backgroundColor:"lightblue"}}>


            <h1 className="text-center">Counter {this.state.num}</h1>
            
            <button onClick={this.INC}>+</button>
            
           <input type="number" class="form-control" placeholder="0" value = {this.state.num} onChange={this.handlenum}/>

            <button onClick={this.DEC}>-</button>
           
            


            </div>
        )}}
    export default Counter;

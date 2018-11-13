import React, { Component } from 'react';


class Nutrtion extends React.Component {

    state={
        num1: 0,
        num2: 0,
        bmi: 0
    }
          
    handlenum1= (e) => {
        this.setState({num1:e.target.value})
    }
    handlenum2= (e) => {
        this.setState({num2:e.target.value})
    }
     BMI = ()  => {
        // this.state.num1=(num1*1000) 
        let num1=(this.state.num1/ 100)
        let bmi =  (this.state.num2/ (num1*num1) )
        this.setState({bmi})
     }


    
    render(){
        return(
            
            <div style={{backgroundColor:"lightblue"}}>


            <h1 className="text-center">Nutrition</h1>
            <h4>height</h4>
            <input type="number" class="form-control" placeholder="0"min = "0" value = {this.state.num1} onChange={this.handlenum1}/>

            <h4>weight</h4>
            <input type="number" class="form-control" placeholder="0"min = "0" value = {this.state.num2} onChange={this.handlenum2}/>
            <button onClick={this.BMI}>Caculate</button>
           
            <br></br>
            <br></br>

            <label>YOUR BMI IS {this.state.bmi}</label>

</div>

)}
}
export default Nutrtion;
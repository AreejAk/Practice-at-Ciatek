import React, { Component } from 'react';


class list extends React.Component {
    

    state={
        list: [ ],
        a: '',
        b: '',
        c: ''       
    }
    componentDidMount() {
        fetch('http://localhost:8000/list')
        .then( res => res.json())
        .then(data => this.setState({list: data}))
        .catch(err => console.log(err));
    }
 

    handleA = (e) => {
        this.setState({a:e.target.value})}

        handleB = (e) => {
            this.setState({b:e.target.value})}

            handleC = (e) => {
                this.setState({c:e.target.value})}

        
                handleadd=(event)=> {
                    event.preventDefault();
                    let newlis = {
                        task_Name:this.state.a,
                        responsiblties:this.state.b,
                        priorty:this.state.c,
                    }
                fetch('http://localhost:8000/addTask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newlis)
                })
                window.location.reload();

                
// let  list =this.state.list;
//  list.push(newlis);
//   this.setState({list})
    
    }
    deletetask=(lis)=> {
      /*  let index=this.state.list.indexOf(lis)
        let list= this.state.list
        list.splice(index,1)*/

        fetch('http://localhost:8000/deleteTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(lis)
      
        
        })
        window.location.reload();

    
    }
    
   


    render(){
       
        return(
            <div>
                <form onSubmit={this.handleSubmit}></form>

            <h1>list</h1>

<br></br> <br></br> <br></br>
<ul class="list-group list-group-flush">
  <input type="text"  class="list-group-item" value = {this.state.a} onChange={this.handleA}/>
  <input type="text"  class="list-group-item"value = {this.state.b} onChange={this.handleB}/>
  <input type="text"  class="list-group-item"value = {this.state.c} onChange={this.handleC}/>


</ul>
        <button onClick={this.handleadd}>
            add list
        </button>

             
            <br/>
            <table class="table table-bordered">
                <thead>
                    <tr>
                   
                    <th scope="col">Task Name</th>
                    <th scope="col">Responsiblties</th>
                    <th scope="col">Priorty</th>
                   
                    </tr>
                </thead>
                <tbody> 
                {
                        this.state.list && this.state.list.map( (lis,index) => 
                            <tr key={index}>
                           
                            }
                                <th scope="col">{lis.task_Name}</th>
                                <th scope="col">{lis.responsiblties}</th>
                                <th scope="col">{lis.priorty}</th>
                                <th scope="col"><button type="button" onClick ={() => this.deletetask(lis)} class="btn btn-primary">Delete</button></th>
                            </tr>
                        )
                    }
                    
                    

                 </tbody>
              </table>  
                        
        </div>
        
        )}}
        export default list;

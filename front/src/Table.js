import React, { Component } from 'react';
// import Todo from "./Todo";

class Table extends React.Component {

    state={
    tasks: [],
    taskName: '',
    responsiblties: '',
    priorty: ''

        
    }   

    handleTaskName = (e) => {
        this.setState({taskName :e.target.value})
    }
    
    handleResponsibility = (e) => {
        this.setState({responsiblties :e.target.value})
    }

    handlepriorty = (e) => {
        this.setState({priorty :e.target.value})
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        let newTask = {
            task_Name:this.state.taskName,
            responsiblties:this.state.responsiblties,
            priorty:this.state.priorty,
        }
        let tasks =this.state.tasks;//we make a copy from tasks array and we named it tasks
        tasks.push(newTask);//push all needded info from new task into tasks
        this.setState({tasks})
      }
      deletetask=(task)=> {
        let index=this.state.tasks.indexOf(task)
        let tasks= this.state.tasks
        tasks.splice(index,1)
        this.setState({tasks})
        
        }

     render(){
        return(
            <div style={{backgroundColor:"lightblue"}}>
<form onSubmit={this.handleSubmit}>
            
            <input type="text" class="form-control" placeholder="Areej" value = {this.state.taskName} onChange={this.handleTaskName}/>
            
            <input type="text" class="form-control" placeholder="Finish Eating" value = {this.state.responsiblties} onChange={this.handleResponsibility}/>
            
            <select class="form-control"value={this.state.priorty} onChange={this.handlepriorty}>
                 <option value="low">low</option>
                 <option value="Medium">Medium</option>
                 <option selected value="High">High</option>
                            
                </select>

            <button class ="form-control">Add task  </button>

            </form>
            <br/>
            <table class="table table-bordered">
                <thead>
                    <tr>
                   
                    <th scope="col">Task Name</th>
                    <th scope="col">Responsiblties</th>
                    <th scope="col">Priorty</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        this.state.tasks.map( (task,index) => 
                            <tr key={index}>
                                <th scope="col">{task.task_Name}</th>
                                <th scope="col">{task.responsiblties}</th>
                                <th scope="col">{task.priorty}</th>
                                <th scope="col"><button type="button" onClick ={() => this.deletetask(task)} class="btn btn-primary">Delete</button></th>
                            </tr>
                        )
                    }
                    

                 </tbody>
              </table>
            </div>
        )
    }
}
export default Table;

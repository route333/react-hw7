import React,{Component} from "react";

class TaskList extends Component{
    tasks = [
        {id:1, text:"Task 1"},
        {id:2, text:"Task 2"},
        {id:3, text:"Task 3"},
        ];
    render(){
        const {id, text} =this.tasks;
        return (
            <div>
              {this.tasks.map((task) => (
                <div key={task.id}>
                  <p>{task.id}</p>
                  <p>{task.text}</p>
                  <button onClick={event => }>Click me!</button>
                </div>
              ))}
            </div>
    );
}
}

export default TaskList;
import React, { Component } from "react";
import styled from "styled-components";

const TasksContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  list-style: none;
`;

const Task = styled.li`
  background-color: grey;
  border-radius: 5%;
  width: 200px;
  height: 200px;
`;

const TaskText = styled.p`
  color: white;
`;

const DelTaskButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px 10px 10px;
  border-radius: 7%;
  border: none;
`;

class TaskList extends Component {
  state = {
    tasks: [
      { id: 1, text: "Task 1" },
      { id: 2, text: "Task 2" },
      { id: 3, text: "Task 3" },
      { id: 4, text: "Task 4" },
      { id: 5, text: "Task 5" },
      { id: 6, text: "Task 6" },
      { id: 7, text: "Task 7" },
    ],
  };

  Delete = (id) => {
    const updateTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updateTasks });
  };

  render() {
    return (
      <TasksContainer>
        {this.state.tasks.map((task) => (
          <Task key={task.id}>
            <TaskText>{task.id}</TaskText>
            <TaskText>{task.text}</TaskText>
            <DelTaskButton onClick={() => this.Delete(task.id)}>
              Видалити
            </DelTaskButton>
          </Task>
        ))}
      </TasksContainer>
    );
  }
}

export default TaskList;

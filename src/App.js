import React, { Component } from 'react';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: '', description: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {};
    newTodo.date = this.state.date;
    newTodo.description = this.state.description;
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  deleteTodo = (event) => {
    event.preventDefault();
    let array = [...this.state.todos];
    let index = array.indexOf(event.target.id);
    array.splice(index,1);
    this.setState({todos: array});
  }

  render() {
    const listRows = this.state.todos.map((todos) =>
    <tr key={todos.toString()}>
      <td>{todos.date}</td>
      <td>{todos.description}</td>
      <td><input className="App-delete-btn" type="button" value="Delete" id={todos.toString()} onClick={this.deleteTodo} /></td>
    </tr>
    );
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple To Do List</h1>
        </header>
        <div className="App-body">
          <form className="App-form" onSubmit={this.addTodo}>
            <fieldset>
              <legend>Add To Do</legend>
                <label htmlFor="date">Date: </label>
                <input name="date" id="date" type="text" onChange={this.inputChanged} value={this.state.date}/>
                <label htmlFor="description">Description: </label>
                <input name="description" id="description" type="text" onChange={this.inputChanged} value={this.state.description}/>
                <input className="App-btn" type="submit" value="Add" />
            </fieldset>
          </form>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th></th>
              </tr>
              {listRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
import react, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';

function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState('')
  useEffect(() => {
    axios.get('http://localhost:8081/api/tasks/').then((res) => {
      const taskList = res.data;
      setList(taskList)
    })
  }, [task])

  const changeHandler = (e) => {
    setTask(e.target.value)
  }
  const clickHandler = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8081/api/tasks/', {
      task: task,
      completed: false
    }).then(function (response) {
      setTask('')
    })
  }
  return (

    <div className="App">

      <h1> To Do List </h1>
      <form onSubmit={clickHandler}>
        <input type="text" onChange={changeHandler} value={task} />
        <button type="submit" >Add</button>
      </form>
      <Todolist list={list} />
    </div>
  );
}

export default App;

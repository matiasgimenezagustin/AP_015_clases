import React, { useEffect, useState } from 'react'

import './App.css'
import { TaskForm, TaskList } from './components'

function App() {
  const [searchString, setSearchString] = useState('')

  //Este es el valor real de todas mis tareas actualmente
  const [tasks, setTasks] = useState([])

  //Este es para las tareas que muestro
  const [currentTasks, setCurrentTask] = useState([])
  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const addTask =  (newTask) =>{
    setTasks([...tasks, newTask])
  }


  useEffect(()=>{
    console.log('detecte un cambio')
    setCurrentTask(tasks.filter(task => 
      task.title.toLowerCase().includes(searchString.toLowerCase()) 
      ||
      task.description.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString, tasks])

  const handleChangeSearchString = (e) =>{
    setSearchString(e.target.value)
    
  }
 

  console.log(tasks)
   return (
    <>
      <form>
        <label>Busca la tarea:</label>
        <input 
        placeholder='Ingresa algo para filtrar' 
        onChange={handleChangeSearchString}
        value={searchString}
        />
      </form>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={currentTasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App

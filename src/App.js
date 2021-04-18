import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import PendingTasks from './components/PendingTasks'

function App() {
  const [tasks, setTasks] = useState([])
// tasks é o nome do state, setTasks é a função chamada para alterar o state

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])
  
  //BUSCAR TAREFAS
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // ADICIONAR TAREFA
  const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await res.json()

  setTasks([...tasks, data])
  
  //   const id = tasks.length + 1
  //   const newTask = { id, ...task }
  // setTasks([...tasks, newTask])
}

// APAGAR TAREFA
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasks.filter((task) => task.id !== id))
}
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

//APAGAR TODAS AS TAREFAS
const deleteAll = async () => {
  const response = await fetch('http://localhost:5000/tasks', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })


  setTasks([])
}

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <AddTask  onAdd={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} />
      <PendingTasks nTasks={tasks.length} Clear={deleteAll} />
    </div>
  );
}

export default App;

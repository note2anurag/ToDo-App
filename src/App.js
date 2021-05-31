import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'attending friends birthday on 3rd June'
    },
    {
        id: 2,
        text: 'interview scheduled on 1st June 2021 at 3:00PM'
    },
    {
        id: 3,
        text: 'Covid-19 vaccination on 5th June'
    }
])

// Add Task
const addTask = (task) => {
 const id = Math.floor(Math.random()*10000) + 1
 const newTask = {id, ...task}
 setTasks([...tasks, newTask])
}

  //Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  alert('Are you sure? Seems like this task is completed')
  //console.log('click', id)
}


  return (
    <Router>
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
       <Route path='/' exact render = {(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No ToDo\'s pending, click Add to set a new one' }
          </>
      )} />
      <Route path='/about' exact component={About} />
      <Footer />
    </div>
    </Router>

  );
}

export default App;

import React,{useState} from 'react';
import './App.css';
import MiniForm from './Components/MiniForm';
import Task from './Components/Task';

 function App() {
    // useState hook
  const [tasks, setTasks] = useState([]);

    // prevTasks :  keep the after tasks the same and add the new task
  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, { text: newTask }]);
  }

  // 'filter' : method use to create new array 
  // 'index' present task I want to delete
  /* So only 'task' have 'i' (index of task) different from index 
  of task I want to delete u can included in new array*/ 
  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  }

  function validateTask(index, newColor) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
         // if else statment
        i === index ? { ...task, color: newColor } : task
      )
    );
  }

  return (
    <div className="App">
      <video src='../videos/production.mp4'  autoPlay loop muted />
      <MiniForm AddTask={addTask} />
      <Task tasks={tasks} DeleteTask={deleteTask} ValidateTask={validateTask} />
    </div>
  );
}


 export default App;





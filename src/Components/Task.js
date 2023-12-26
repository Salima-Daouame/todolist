import React from 'react';
import '../Styles/Task.css'

   // function Tasks take three props
   //  tasks :  It's Array 
   //({,}) => prpps  ||  (,) => parameters
function Tasks({ tasks, DeleteTask, ValidateTask }) {
  return (
    <div className='tasks_todo'>
      <ol>
        {/* map() function take one or two parameters (current element, index)  */}
        {tasks.map((task, index) => ( 
        // map :  use to loop in Array
          <li key={index} 
          style={{ backgroundColor: task.color }}>
            {task.text} 
            <div className='burron_btn'>
            <button onClick={() => 
              DeleteTask(index)}>x</button>
            <button onClick={() =>
              ValidateTask(index, '#58b3d3')}>v</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Tasks;

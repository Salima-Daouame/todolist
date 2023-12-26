import React, { useState } from 'react'
import '../Styles/MiniForm.css'

  /*AddTask is like a function props for the component or 
  Function MiniForm , use for allow communication between 
  App and MiniForm (Parent & child) to add new task*/
function MiniForm({ AddTask }) {

       //useState hook
  const [myvalue, SetMyValue] = useState('');

  function addTask() {
     //cheek if myvalue empty or not, if empty we can add the task 
    if (myvalue.trim() === '') {
      return;
    }

    AddTask(myvalue); //It's a props function for the compnent MiniForm
    // Set the value of 'myvalue' to an empty string after add the new task
    SetMyValue('');    
  }

  return (
    <>
      <div className='note__pr'>
        <p>TO DO List</p>
      </div>

      <div className='note__pr'>
        <input
          type='text'
          className='my__input'
          placeholder='Add task'
          // to keep input empty after the instuction '  SetMyValue(''); '
          value={myvalue} 
          //get value from the input 
          onChange={(e) => SetMyValue(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </>
  );
}

export default MiniForm;


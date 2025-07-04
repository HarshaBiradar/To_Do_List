import React, { useState } from 'react'

const App = () => {
  const[inputData,setInputData]=useState(" ");
  const[todo,setToDo]=useState(()=>{
    const storedData=JSON.parse(localStorage.getItem("todo"));
    return storedData?storedData:[];
  });

  const[editItem,setEditItem]=useState(null);
  // const[completed,setCompleted]=useState();


  function handleInputData(e){
    setInputData(e.target.value);
  }

  function handleToDoList(){
    if(inputData.trim()==""){
      alert("Enter a task!!!");
      return;
    }
    if(editItem!==null){
      const updatedList=todo.map((item,index)=>(
        index===editItem?inputData.trim():item
      ))
      setToDo(updatedList);
      localStorage.setItem("todo",JSON.stringify(updatedList));
      setInputData("");
      return;

    }
    const savedData=[...todo,inputData.trim()];
    setToDo(savedData);
    localStorage.setItem("todo",JSON.stringify(savedData));
    setInputData("");
    alert("New task added!!!")
  }

  function deleteTask(index){
    const updatedList=todo.filter((ele,i)=>i!==index);
    setToDo(updatedList);
    localStorage.setItem("todo",JSON.stringify(updatedList));
  }

  function editToDoList(index){
    setInputData(todo[index]);
    setEditItem(index);
  }


  return (
    <div>
      <div id='top-cont'>
        <input type="text" id='input-cont' placeholder='Enter task' value={inputData} onChange={handleInputData}/>
        <button id='button-cont' onClick={handleToDoList} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </button>
      </div>

      <div id='botton-cont'>
        <ul>
          {
            todo.map((item,index)=>(
            <li key={index}>
              <span className='task-text'>{`${index+1}. ${item}`}</span>
              <div className='button-gp'>
                <button onClick={()=>editToDoList(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>
                </button>
                <button onClick={()=>deleteTask(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>
                </button>
                <label >
                  Done?
                  <input type="radio"  />
                </label>
                
              </div>
              
            </li>
          ))
          }
        </ul>
      </div>
 

    </div>
    
  )
}

export default App;
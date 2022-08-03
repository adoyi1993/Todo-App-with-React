import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText}) => {
    const textInputHandler =(e)=>{ 
       setInputText(e.target.value);
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        if (!inputText ){ alert("Kindly enter a todo")}

        else{
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()* 1000}]);
        setInputText("");
        }

    }    

  return (
    <form >
        <input type="text" className="todo-input" onChange={textInputHandler}  value={inputText} />
        <button onClick= {submitTodoHandler} className="todo-button">  <i className="fas fa-plus-square"></i>  </button>


        <div className="select">
            <select name="todos" className="filter-todo" >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="unCompleted">Uncompleted</option>
            </select>




        </div>
    </form>
    
  )
}

export default Form
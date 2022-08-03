import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  const [inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Boni's Todo List</h1>
      </header>
      <Form  setInputText={setInputText} setTodos={setTodos} todos= {todos} inputText={inputText} />
      <TodoList todos={todos} setTodos={setTodos} />
      

    
    </div>
  );
}

export default App;

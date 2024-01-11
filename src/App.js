import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css'; // Importando los estilos CSS

const defaultTodos = [
  {
    text: 'Cortar Cebolla', completed: false
  },
  {
    text: 'Salir a Caminar', completed: true
  },
  {
    text: 'Salir con mis Padres', completed: false
  },
  {
    text: 'Cenar', completed: true
  },
  {
    text: 'Salir' , completed: true
  }

]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
     
      <TodoList>
        <div className='container_container'>
        <div className='container'>
          <h2 className='Todo_Title_Container'>Task List</h2>
          <TodoSearch /> {TodoSearch}
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text}// El Key(Llave) va ser los diferetes TodoItems text: 
           text={todo.text} //Esta enviando los TodoItems a Todoitem.js
           completed = {todo.completed} />  //Ha futuro. Marcar completado o Faltante
        ))} 
        </div>
        </div>
        
      </TodoList>

      <CreateTodoButton />
    </> 
   
  );
}

export default App;

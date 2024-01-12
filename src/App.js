import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css'; // Importando los estilos CSS

let defaultTodos = [
  {
    text: 'Cortar Cebolla', completed: true
  },
  {
    text: 'Salir a Caminar', completed: true 
  },
  {
    text: 'Salir a Caminar', completed: false 
  }

]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchState , foudState] = React.useState();

  const completedTodos = todos.filter(todo => todo.completed).length 
  const totalTodos = todos.filter(todo => todo.text).length

 

  //searchState = Busqueda
  //foudState = Encontrado "Actualizador"
console.log("Los usuarios buscan To do de " + searchState)

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
     
      <TodoList>
        <div className='container_container'>
        <div className='container'>
          <h2 className='Todo_Title_Container'>Task List</h2>
          <TodoSearch 
            searchState={searchState}
            foudState={foudState}
          /> 
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

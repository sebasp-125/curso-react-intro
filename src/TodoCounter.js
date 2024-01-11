import './todoCounter.css'; // Importando los estilos CSS

function TodoCounter({ total, completed }) {
  return (
    <body>
 <div>
      <h2 className="title">To-Do List</h2>
      <h1>
        Has completado <span>{completed}</span> de <span>{total}</span> To Do List
      </h1>
    </div>
    </body>
  );
}

export { TodoCounter };

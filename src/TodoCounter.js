import './todoCounter.css'; // Importando los estilos CSS

function TodoCounter({ total, completed }) {
  return (
 <div className='content_titles'>
  <h2 className='Build'>Build</h2>
      <h2 className="title"><span className='To-Do'>To-Do</span> <span className='List'>List</span></h2>
      <h1>
        Has completado <span className='completed_total'>{completed}</span> de <span className='completed_total'>{total}</span> To Do List
      </h1>
    </div>
  );
}

export { TodoCounter };

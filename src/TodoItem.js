// Importando estilos
import './TodoItem.css';

function TodoItem(props) {
  // Clase condicional para estilos de texto
  const textClass = props.completed ? 'TodoItem-Completed' : 'TodoItem-Incomplete';

  // Estilos condicionales para el fondo
  const backgroundStyle = {
    backgroundColor: props.completed ? 'green' : 'red',
  };

  return (
    <li style={backgroundStyle}>
      <span className={textClass}>V</span>
      <p className={textClass}>{props.text}</p>
      <span className='Delate_Todo'>X</span>
    </li>
  );
}

export { TodoItem };

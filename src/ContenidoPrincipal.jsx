import { useTema } from './TemaContext';
import './ContenidoPrincipal.css';
function ContenidoPrincipal() {
  const { esOscuro } = useTema();
  return (
    <div className="contenido">
      <h2>Bienvenido al Sistema de Tema</h2>
      <p>
        Este ejemplo demuestra cómo usar useContext para 
compartir
        estado de tema entre componentes.
      </p>
      <div className="cards">
        <div className="card">
          <h3>Tarjeta 1</h3>
          <p>Este contenido cambia de color según el tema 
seleccionado.</p>
        </div>
        <div className="card">
          <h3>Tarjeta 2</h3>
          <p>Prueba cambiar entre tema claro y oscuro en el 
encabezado.</p>
        </div>
        <div className="card">
          <h3>Tarjeta 3</h3>
          <p>El tema se guarda en localStorage automáticamente.
</p>
        </div>
      </div>
      <div className="info">
        <p>
          <strong>Tema Actual:</strong> {esOscuro ? ' Oscuro' : 
' Claro'}
        </p>
      </div>
    </div>
  );
}
export default ContenidoPrincipal;
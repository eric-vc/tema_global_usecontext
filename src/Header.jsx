import { useTema } from './TemaContext';
import './Header.css';
function Header() {
  const { tema, cambiarTema, esOscuro } = useTema();
  return (
    <header className="header">
      <div className="header-container">
        <h1>Mi Aplicación</h1>
        <button
          className="btn-tema"
          onClick={() => cambiarTema(esOscuro ? 'claro' : 
'oscuro')}
        >
          {esOscuro ? ' Claro' : ' Oscuro'}
        </button>
      </div>
    </header>
  );
}
export default Header;
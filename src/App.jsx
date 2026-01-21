import { TemaProvider, useTema } from './TemaContext';
import Header from './Header';
import ContenidoPrincipal from './ContenidoPrincipal';
import './App.css';
function AppContent() {
  const { tema } = useTema();
  return (
    <div className={`app app-${tema}`}>
      <Header />
      <main className="main-content">
        <ContenidoPrincipal />
      </main>
    </div>
  );
}
export default function App() {
  return (
    <TemaProvider>
      <AppContent />
    </TemaProvider>
  );
}
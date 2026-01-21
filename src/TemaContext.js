import React, { useState, useEffect } from 'react';
export const TemaContext = React.createContext();
export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');
  useEffect(() => {
    const temaguardado = localStorage.getItem('tema');
    if (temaguardado) {
      setTema(temaguardado);
    } else {
      const prefiereOscuro = window.matchMedia('(prefers-color scheme: dark)').matches;
      setTema(prefiereOscuro ? 'oscuro' : 'claro');
    }
  }, []);
  const cambiarTema = (nuevoTema) => {
    setTema(nuevoTema);
    localStorage.setItem('tema', nuevoTema);
  };
  const value = {
    tema,
    cambiarTema,
    esOscuro: tema === 'oscuro',
    esClaro: tema === 'claro'
  };
  return (
    <TemaContext.Provider value={value}>
      {children}
    </TemaContext.Provider>
  );
}
export function useTema() {
  const context = React.useContext(TemaContext);
  if (!context) {
    throw new Error('useTema debe usarse dentro de TemaProvider');
  }
  return context;
}
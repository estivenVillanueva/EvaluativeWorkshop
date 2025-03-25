import { useState } from 'react';

export const ColorGenerator = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const coloresAbsolutos = [
    "#FF0000",     // Rojo
    "#00FF00",     // Verde
    "#0000FF",     // Azul
    "#FFFF00",     // Amarillo
    "#FF00FF",     // Magenta
    "#00FFFF",     // Cian
    "#000000",     // Negro
    "#FFFFFF",     // Blanco
    "#808080",     // Gris
    "#800000",     // Marrón oscuro
    "#808000",     // Oliva
    "#800080",     // Púrpura
    "#008080",     // Verde azulado
    "#C0C0C0",     // Plata
    "#FFA500",     // Naranja
    "#A52A2A"      // Marrón
  ];

  const generateColor = () => {
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setSelectedColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div>
      <button onClick={generateColor}>Generate Color</button>
      {selectedColor && (
        <p>Color seleccionado: {selectedColor}</p>
      )}
    </div>
  );
}; 
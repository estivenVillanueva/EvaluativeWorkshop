import { useState } from 'react';

export const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.style.backgroundColor = isDark ? '#ffffff' : '#000000';
    document.body.style.color = isDark ? '#000000' : '#ffffff';
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}; 
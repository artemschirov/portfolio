import { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

export default function ThemeContextWrapperComponent({ children }) {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove('dark');
        break;
      case themes.dark:
      default:
        document.body.classList.add('dark');
        break;
    }
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

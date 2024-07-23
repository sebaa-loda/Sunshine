import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import "../scss/auth/_themeToogle.scss"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`theme-toggle-button ${theme}-mode`} >
            {theme === 'light' ? 'Tema Claro' : 'Tema Oscuro'}
        </button>
    );
}

export default ThemeToggle;
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import "../scss/auth/_themeToggle.scss"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`theme-toggle-button ${theme}-mode`}>
            {theme === 'light' ? (
                <>
                    <i className='bx bx-moon icon'></i>
                    <span className='span'>Dark Mode</span>
                </>
            ) : (
                <>
                    <i className='bx bx-sun icon'></i>
                    <span className='span'>Light Mode</span>
                </>
            )}
        </button>
    );
}
export default ThemeToggle;
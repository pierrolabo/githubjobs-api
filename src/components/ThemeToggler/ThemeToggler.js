import {useState, useEffect} from 'react';
import './ThemeToggler.scss'
import sun from '../../assets/desktop/icon-sun.svg'
import moon from '../../assets/desktop/icon-moon.svg'
const ThemeToggler = () => {
    const [themeState, setThemeState] = useState(false)

    const handleChange = () => {
        setThemeState(!themeState)
        if(!themeState) {
            console.log("set dark theme")
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode')
        } else {
            console.log("set light theme")
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode')
        }
    }

    useEffect(() => {
        const userPrefDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        const getTheme = localStorage.getItem('Theme');
        console.log(`Your prefered color scheme is : ${userPrefDarkMode.matches ? "Dark Mode" : "Light Mode"}`)
        /*
        *   If getTheme isn't null, this mean our user already toggled theme
        *   The default theme is light, so if user entry is light we don't change anything
        *   If user has no entry in localstorage, but prefer dark mode, we switch
        */
        if((getTheme && getTheme === 'dark') || (!getTheme && userPrefDarkMode.matches)) {
            document.body.classList.add('dark-mode')
            setThemeState(true)
        }
        

    }, [])
    return (
        <div className="header__themetoggler__container">
            <div>
            <img src={sun} alt="moon" className="header__themetoggler__container--ico--sun"/>
            </div>
            <input checked={themeState} onChange={handleChange} type="checkbox" id="switch" className="header__themetoggler__container--input"/>
            <label htmlFor="switch" className="header__themetoggler__container--label">Toggle</label>
            <div className="header__themetoggler__ico">
                <div className="header__themetoggler__ico__container">
            <img src={moon} alt="moon" className="header__themetoggler__container--ico--moon"/>

                </div>

            </div>
        </div>
    )
}   

export default ThemeToggler;